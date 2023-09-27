/*
  Warnings:

  - You are about to drop the column `correo` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `direccionId` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the `direccion` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `calleNumero` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ciudad` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codigoPostal` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `colonia` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `usuario` DROP FOREIGN KEY `Usuario_direccionId_fkey`;

-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `correo`,
    DROP COLUMN `direccionId`,
    ADD COLUMN `calleNumero` VARCHAR(191) NOT NULL,
    ADD COLUMN `ciudad` VARCHAR(191) NOT NULL,
    ADD COLUMN `codigoPostal` INTEGER NOT NULL,
    ADD COLUMN `colonia` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `estado` VARCHAR(191) NOT NULL,
    MODIFY `nombre` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `direccion`;

-- CreateIndex
CREATE UNIQUE INDEX `Usuario_email_key` ON `Usuario`(`email`);
