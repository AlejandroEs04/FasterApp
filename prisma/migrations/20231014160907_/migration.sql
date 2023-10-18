/*
  Warnings:

  - You are about to drop the column `token` on the `usuario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `token`,
    ADD COLUMN `userToken` VARCHAR(191) NOT NULL DEFAULT '';
