/*
  Warnings:

  - You are about to drop the `compra` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `productoscompra` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `compra` DROP FOREIGN KEY `Compra_usuarioId_fkey`;

-- DropForeignKey
ALTER TABLE `envio` DROP FOREIGN KEY `Envio_compraId_fkey`;

-- DropForeignKey
ALTER TABLE `productoscompra` DROP FOREIGN KEY `ProductosCompra_compraId_fkey`;

-- DropForeignKey
ALTER TABLE `productoscompra` DROP FOREIGN KEY `ProductosCompra_productoId_fkey`;

-- DropTable
DROP TABLE `compra`;

-- DropTable
DROP TABLE `productoscompra`;
