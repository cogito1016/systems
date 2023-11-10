-- CreateTable
CREATE TABLE `Member` (
    `idx` INTEGER NOT NULL AUTO_INCREMENT,
    `member_code` CHAR(50) NOT NULL,
    `team_code` CHAR(50) NULL,
    `name` VARCHAR(50) NOT NULL,
    `level` INTEGER NOT NULL,
    `phone_number` VARCHAR(20) NULL,
    `address` VARCHAR(255) NULL,
    `add_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Account` (
    `idx` INTEGER NOT NULL AUTO_INCREMENT,
    `member_code` CHAR(50) NULL,
    `user_id` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `thoughtCount` INTEGER NOT NULL,
    `facebook_id` VARCHAR(50) NULL,
    `facebook_access_token` VARCHAR(255) NULL,
    `google_id` VARCHAR(50) NULL,
    `google_access_token` VARCHAR(255) NULL,
    `add_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
