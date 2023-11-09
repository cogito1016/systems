/*
  Warnings:

  - Made the column `team_code` on table `Team` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Member` MODIFY `team_code` CHAR(50) NULL;

-- AlterTable
ALTER TABLE `Team` MODIFY `team_code` CHAR(50) NOT NULL;
