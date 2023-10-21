/*
  Warnings:

  - You are about to drop the column `productoId` on the `compra` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `compra` DROP FOREIGN KEY `Compra_productoId_fkey`;

-- AlterTable
ALTER TABLE `compra` DROP COLUMN `productoId`;

-- CreateTable
CREATE TABLE `ProductosCompra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `compraId` INTEGER NOT NULL,
    `productoId` INTEGER NOT NULL,
    `cantidad` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Envio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `compraId` INTEGER NOT NULL,
    `paqueteria` BOOLEAN NOT NULL,
    `enviado` BOOLEAN NOT NULL,
    `puntoEnvio` BOOLEAN NOT NULL,
    `entregado` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProductosCompra` ADD CONSTRAINT `ProductosCompra_compraId_fkey` FOREIGN KEY (`compraId`) REFERENCES `Compra`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductosCompra` ADD CONSTRAINT `ProductosCompra_productoId_fkey` FOREIGN KEY (`productoId`) REFERENCES `Producto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Envio` ADD CONSTRAINT `Envio_compraId_fkey` FOREIGN KEY (`compraId`) REFERENCES `Compra`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
