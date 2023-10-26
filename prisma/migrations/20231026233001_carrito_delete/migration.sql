/*
  Warnings:

  - You are about to drop the `carrito` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `carrito` DROP FOREIGN KEY `Carrito_productoId_fkey`;

-- DropForeignKey
ALTER TABLE `carrito` DROP FOREIGN KEY `Carrito_usuarioId_fkey`;

-- DropTable
DROP TABLE `carrito`;
