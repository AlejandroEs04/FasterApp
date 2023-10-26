/*
  Warnings:

  - A unique constraint covering the columns `[usuarioId]` on the table `Carrito` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Carrito_usuarioId_key` ON `Carrito`(`usuarioId`);
