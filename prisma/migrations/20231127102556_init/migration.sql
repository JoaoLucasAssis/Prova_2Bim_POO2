-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Lance" (
    "compradorId" INTEGER NOT NULL,
    "leilaoId" INTEGER NOT NULL,
    "valor" REAL NOT NULL,

    PRIMARY KEY ("compradorId", "leilaoId"),
    CONSTRAINT "Lance_compradorId_fkey" FOREIGN KEY ("compradorId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lance_leilaoId_fkey" FOREIGN KEY ("leilaoId") REFERENCES "Leilao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Leilao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "produto" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "dataLimite" DATETIME NOT NULL,
    "donoId" INTEGER NOT NULL,
    "listaLances" TEXT NOT NULL,
    CONSTRAINT "Leilao_donoId_fkey" FOREIGN KEY ("donoId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Lance_valor_key" ON "Lance"("valor");

-- CreateIndex
CREATE UNIQUE INDEX "Leilao_produto_key" ON "Leilao"("produto");
