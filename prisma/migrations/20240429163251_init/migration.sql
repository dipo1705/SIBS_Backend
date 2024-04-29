-- CreateTable
CREATE TABLE "Donneur" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "groupeSanguin" TEXT NOT NULL,
    "rhesus" TEXT NOT NULL,

    CONSTRAINT "Donneur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Don" (
    "id" SERIAL NOT NULL,
    "dateDon" TIMESTAMP(3) NOT NULL,
    "banqueSangId" INTEGER NOT NULL,
    "donneurId" INTEGER NOT NULL,
    "typeDon" TEXT NOT NULL,

    CONSTRAINT "Don_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BanqueSang" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "BanqueSang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProduitSanguin" (
    "id" SERIAL NOT NULL,
    "type_Produit" TEXT NOT NULL,
    "quantite" INTEGER NOT NULL,
    "prix" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ProduitSanguin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evenement" (
    "id" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "dateEvenement" TIMESTAMP(3) NOT NULL,
    "heureEvenement" TIMESTAMP(3) NOT NULL,
    "banqueSangId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Evenement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alerte" (
    "id" SERIAL NOT NULL,
    "typeSang" TEXT NOT NULL,
    "niveauUrgence" TEXT NOT NULL,
    "dateAlerte" TIMESTAMP(3) NOT NULL,
    "banqueSangId" INTEGER NOT NULL,

    CONSTRAINT "Alerte_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hopital" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Hopital_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commande" (
    "id" SERIAL NOT NULL,
    "dateCommande" TIMESTAMP(3) NOT NULL,
    "hopitalId" INTEGER NOT NULL,
    "banqueSangId" INTEGER NOT NULL,
    "modePaiement" TEXT NOT NULL,
    "modeLivraison" TEXT NOT NULL,
    "statutCommande" TEXT NOT NULL,

    CONSTRAINT "Commande_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LigneCommande" (
    "id" SERIAL NOT NULL,
    "commandeId" INTEGER NOT NULL,
    "produitSanguinId" INTEGER NOT NULL,
    "quantite" INTEGER NOT NULL,

    CONSTRAINT "LigneCommande_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BanqueSangToProduitSanguin" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CommandeToProduitSanguin" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BanqueSangToProduitSanguin_AB_unique" ON "_BanqueSangToProduitSanguin"("A", "B");

-- CreateIndex
CREATE INDEX "_BanqueSangToProduitSanguin_B_index" ON "_BanqueSangToProduitSanguin"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommandeToProduitSanguin_AB_unique" ON "_CommandeToProduitSanguin"("A", "B");

-- CreateIndex
CREATE INDEX "_CommandeToProduitSanguin_B_index" ON "_CommandeToProduitSanguin"("B");

-- AddForeignKey
ALTER TABLE "Don" ADD CONSTRAINT "Don_banqueSangId_fkey" FOREIGN KEY ("banqueSangId") REFERENCES "BanqueSang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Don" ADD CONSTRAINT "Don_donneurId_fkey" FOREIGN KEY ("donneurId") REFERENCES "Donneur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evenement" ADD CONSTRAINT "Evenement_banqueSangId_fkey" FOREIGN KEY ("banqueSangId") REFERENCES "BanqueSang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alerte" ADD CONSTRAINT "Alerte_banqueSangId_fkey" FOREIGN KEY ("banqueSangId") REFERENCES "BanqueSang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_hopitalId_fkey" FOREIGN KEY ("hopitalId") REFERENCES "Hopital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_banqueSangId_fkey" FOREIGN KEY ("banqueSangId") REFERENCES "BanqueSang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LigneCommande" ADD CONSTRAINT "LigneCommande_commandeId_fkey" FOREIGN KEY ("commandeId") REFERENCES "Commande"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LigneCommande" ADD CONSTRAINT "LigneCommande_produitSanguinId_fkey" FOREIGN KEY ("produitSanguinId") REFERENCES "ProduitSanguin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BanqueSangToProduitSanguin" ADD CONSTRAINT "_BanqueSangToProduitSanguin_A_fkey" FOREIGN KEY ("A") REFERENCES "BanqueSang"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BanqueSangToProduitSanguin" ADD CONSTRAINT "_BanqueSangToProduitSanguin_B_fkey" FOREIGN KEY ("B") REFERENCES "ProduitSanguin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommandeToProduitSanguin" ADD CONSTRAINT "_CommandeToProduitSanguin_A_fkey" FOREIGN KEY ("A") REFERENCES "Commande"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommandeToProduitSanguin" ADD CONSTRAINT "_CommandeToProduitSanguin_B_fkey" FOREIGN KEY ("B") REFERENCES "ProduitSanguin"("id") ON DELETE CASCADE ON UPDATE CASCADE;
