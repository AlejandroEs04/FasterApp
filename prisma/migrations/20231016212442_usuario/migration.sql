/*
  Warnings:

  - You are about to drop the column `userToken` on the `usuario` table. All the data in the column will be lost.
  - Added the required column `token` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Made the column `nombre` on table `usuario` required. This step will fail if there are existing NULL values in that column.
  - Made the column `apellido` on table `usuario` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `usuario` required. This step will fail if there are existing NULL values in that column.
  - Made the column `numero` on table `usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `userToken`,
    ADD COLUMN `token` VARCHAR(191) NOT NULL,
    MODIFY `nombre` VARCHAR(191) NOT NULL,
    MODIFY `apellido` VARCHAR(191) NOT NULL,
    MODIFY `password` VARCHAR(191) NOT NULL,
    MODIFY `numero` VARCHAR(191) NOT NULL,
    ALTER COLUMN `calleNumero` DROP DEFAULT,
    ALTER COLUMN `ciudad` DROP DEFAULT,
    ALTER COLUMN `codigoPostal` DROP DEFAULT,
    ALTER COLUMN `colonia` DROP DEFAULT,
    ALTER COLUMN `estado` DROP DEFAULT;
