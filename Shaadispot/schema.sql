-- ShaadiSpot - On The Spot
-- College Project Database Schema (MySQL)
-- Simplified for BSc IT Project Reports and Viva

SET FOREIGN_KEY_CHECKS = 0;

-- Drop tables in reverse order of dependencies
DROP TABLE IF EXISTS `Package_Components`;
DROP TABLE IF EXISTS `Custom_Wedding_Packages`;
DROP TABLE IF EXISTS `Additional_Services`;
DROP TABLE IF EXISTS `Complaints`;
DROP TABLE IF EXISTS `Favorites`;
DROP TABLE IF EXISTS `Review_Responses`;
DROP TABLE IF EXISTS `Reviews`;
DROP TABLE IF EXISTS `Payment_Installments`;
DROP TABLE IF EXISTS `Payments`;
DROP TABLE IF EXISTS `Bookings`;
DROP TABLE IF EXISTS `Booking_Status`;
DROP TABLE IF EXISTS `Service_Packages`;
DROP TABLE IF EXISTS `Service_Photos`;
DROP TABLE IF EXISTS `Services`;
DROP TABLE IF EXISTS `Service_Categories`;
DROP TABLE IF EXISTS `Providers`;
DROP TABLE IF EXISTS `Users`;
DROP TABLE IF EXISTS `Locations`;
DROP TABLE IF EXISTS `Admins`;

SET FOREIGN_KEY_CHECKS = 1;

-- =========================================================================
-- 1. Locations Table
-- =========================================================================
CREATE TABLE `Locations` (
    `location_id` INT AUTO_INCREMENT PRIMARY KEY,
    `city` VARCHAR(100) NOT NULL,
    `state` VARCHAR(100) NOT NULL,
    `pincode` VARCHAR(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =========================================================================
-- 2. Users Table
-- =========================================================================
CREATE TABLE `Users` (
    `user_id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(20) DEFAULT NULL,
    `profile_pic` VARCHAR(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =========================================================================
-- 3. Providers Table
-- =========================================================================
CREATE TABLE `Providers` (
    `provider_id` INT AUTO_INCREMENT PRIMARY KEY,
    `provider_name` VARCHAR(100) NOT NULL,
    `provider_type` VARCHAR(50) NOT NULL, -- e.g., Venue, Decorator, Caterer
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `phone` VARCHAR(20) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `location_id` INT NOT NULL,
    `status` VARCHAR(50) DEFAULT 'Pending',
    FOREIGN KEY (`location_id`) REFERENCES `Locations` (`location_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =========================================================================
-- 4. Service Categories Table
-- =========================================================================
CREATE TABLE `Service_Categories` (
    `category_id` INT AUTO_INCREMENT PRIMARY KEY,
    `category_name` VARCHAR(100) NOT NULL UNIQUE, -- e.g., Venue, Decorator, Caterer
    `description` TEXT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =========================================================================
-- 5. Services Table
-- =========================================================================
CREATE TABLE `Services` (
    `service_id` INT AUTO_INCREMENT PRIMARY KEY,
    `provider_id` INT NOT NULL,
    `category_id` INT NOT NULL,
    `location_id` INT NOT NULL,
    `service_name` VARCHAR(150) NOT NULL,
    `description` TEXT DEFAULT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (`provider_id`) REFERENCES `Providers` (`provider_id`) ON DELETE CASCADE,
    FOREIGN KEY (`category_id`) REFERENCES `Service_Categories` (`category_id`),
    FOREIGN KEY (`location_id`) REFERENCES `Locations` (`location_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =========================================================================
-- 6. Service Photos Table
-- =========================================================================
CREATE TABLE `Service_Photos` (
    `photo_id` INT AUTO_INCREMENT PRIMARY KEY,
    `service_id` INT NOT NULL,
    `photo_url` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    FOREIGN KEY (`service_id`) REFERENCES `Services` (`service_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =========================================================================
-- 7. Service Packages Table
-- =========================================================================
CREATE TABLE `Service_Packages` (
    `package_id` INT AUTO_INCREMENT PRIMARY KEY,
    `service_id` INT NOT NULL,
    `package_name` VARCHAR(100) NOT NULL,
    `description` TEXT DEFAULT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (`service_id`) REFERENCES `Services` (`service_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =========================================================================
-- 8. Booking Status Table
-- =========================================================================
CREATE TABLE `Booking_Status` (
    `status_id` INT AUTO_INCREMENT PRIMARY KEY,
    `status_name` VARCHAR(50) NOT NULL UNIQUE -- e.g., Pending, Confirmed, Completed, Cancelled
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =========================================================================
-- 9. Bookings Table
-- =========================================================================
CREATE TABLE `Bookings` (
    `booking_id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `service_id` INT NOT NULL,
    `package_id` INT DEFAULT NULL,
    `status_id` INT NOT NULL,
    `event_date` DATE NOT NULL,
    `total_amount` DECIMAL(10, 2) NOT NULL,
    `paid_amount` DECIMAL(10, 2) DEFAULT 0.00,
    `special_requests` TEXT DEFAULT NULL,
    FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`),
    FOREIGN KEY (`service_id`) REFERENCES `Services` (`service_id`),
    FOREIGN KEY (`package_id`) REFERENCES `Service_Packages` (`package_id`) ON DELETE SET NULL,
    FOREIGN KEY (`status_id`) REFERENCES `Booking_Status` (`status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =========================================================================
-- 10. Payments Table
-- =========================================================================
CREATE TABLE `Payments` (
    `payment_id` INT AUTO_INCREMENT PRIMARY KEY,
    `booking_id` INT NOT NULL,
    `payment_method` VARCHAR(50) NOT NULL, -- e.g., Net Banking, Credit Card, UPI
    `amount_paid` DECIMAL(10, 2) NOT NULL,
    `payment_status` VARCHAR(50) NOT NULL, -- e.g., Pending, Success, Failed
    `transaction_id` VARCHAR(100) NOT NULL UNIQUE,
    FOREIGN KEY (`booking_id`) REFERENCES `Bookings` (`booking_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =========================================================================
-- 11. Payment Installments Table
-- =========================================================================
CREATE TABLE `Payment_Installments` (
    `installment_id` INT AUTO_INCREMENT PRIMARY KEY,
    `booking_id` INT NOT NULL,
    `payment_id` INT DEFAULT NULL, -- Links to payment once paid
    `installment_number` INT NOT NULL,
    `amount_due` DECIMAL(10, 2) NOT NULL,
    `due_date` DATE NOT NULL,
    `paid_date` DATE DEFAULT NULL,
    `installment_status` VARCHAR(50) NOT NULL, -- e.g., Pending, Paid, Overdue
    FOREIGN KEY (`booking_id`) REFERENCES `Bookings` (`booking_id`),
    FOREIGN KEY (`payment_id`) REFERENCES `Payments` (`payment_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =========================================================================
-- 12. Reviews Table
-- =========================================================================
CREATE TABLE `Reviews` (
    `review_id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `service_id` INT NOT NULL,
    `rating` INT NOT NULL,
    `comment` TEXT DEFAULT NULL,
    `review_date` DATE NOT NULL,
    FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE,
    FOREIGN KEY (`service_id`) REFERENCES `Services` (`service_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =========================================================================
-- 13. Review Responses Table
-- =========================================================================
CREATE TABLE `Review_Responses` (
    `response_id` INT AUTO_INCREMENT PRIMARY KEY,
    `review_id` INT NOT NULL UNIQUE, -- Guaranteed 1:1 relationship with Review
    `provider_id` INT NOT NULL,
    `reply_text` TEXT NOT NULL,
    `reply_date` DATE NOT NULL,
    FOREIGN KEY (`review_id`) REFERENCES `Reviews` (`review_id`) ON DELETE CASCADE,
    FOREIGN KEY (`provider_id`) REFERENCES `Providers` (`provider_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =========================================================================
-- 14. Favorites Table
-- =========================================================================
CREATE TABLE `Favorites` (
    `favorite_id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `service_id` INT NOT NULL,
    FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE,
    FOREIGN KEY (`service_id`) REFERENCES `Services` (`service_id`) ON DELETE CASCADE,
    CONSTRAINT `uq_user_service_fav` UNIQUE (`user_id`, `service_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =========================================================================
-- 15. Complaints Table
-- =========================================================================
CREATE TABLE `Complaints` (
    `complaint_id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT DEFAULT NULL,
    `provider_id` INT DEFAULT NULL,
    `booking_id` INT DEFAULT NULL,
    `title` VARCHAR(150) NOT NULL,
    `details` TEXT NOT NULL,
    `status` VARCHAR(50) DEFAULT 'Open', -- e.g., Open, Resolved, Closed
    `admin_response` TEXT DEFAULT NULL,
    FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE SET NULL,
    FOREIGN KEY (`provider_id`) REFERENCES `Providers` (`provider_id`) ON DELETE SET NULL,
    FOREIGN KEY (`booking_id`) REFERENCES `Bookings` (`booking_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =========================================================================
-- 16. Additional Services Table
-- =========================================================================
CREATE TABLE `Additional_Services` (
    `addon_id` INT AUTO_INCREMENT PRIMARY KEY,
    `booking_id` INT NOT NULL,
    `addon_name` VARCHAR(150) NOT NULL,
    `addon_price` DECIMAL(10, 2) NOT NULL,
    `status` VARCHAR(50) DEFAULT 'Pending', -- e.g., Pending, Approved, Rejected
    FOREIGN KEY (`booking_id`) REFERENCES `Bookings` (`booking_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =========================================================================
-- 17. Custom Wedding Packages Table
-- =========================================================================
CREATE TABLE `Custom_Wedding_Packages` (
    `custom_package_id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `package_name` VARCHAR(100) NOT NULL,
    `total_budget` DECIMAL(10, 2) DEFAULT NULL,
    `wedding_date` DATE DEFAULT NULL,
    FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =========================================================================
-- 18. Package Components Table
-- =========================================================================
CREATE TABLE `Package_Components` (
    `component_id` INT AUTO_INCREMENT PRIMARY KEY,
    `custom_package_id` INT NOT NULL,
    `service_id` INT NOT NULL,
    `package_id` INT DEFAULT NULL,
    FOREIGN KEY (`custom_package_id`) REFERENCES `Custom_Wedding_Packages` (`custom_package_id`) ON DELETE CASCADE,
    FOREIGN KEY (`service_id`) REFERENCES `Services` (`service_id`) ON DELETE CASCADE,
    FOREIGN KEY (`package_id`) REFERENCES `Service_Packages` (`package_id`) ON DELETE CASCADE,
    CONSTRAINT `uq_custom_pkg_svc` UNIQUE (`custom_package_id`, `service_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =========================================================================
-- 19. Admins Table
-- =========================================================================
CREATE TABLE `Admins` (
    `admin_id` INT AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(50) NOT NULL UNIQUE,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `admin_role` VARCHAR(50) DEFAULT 'Support' -- e.g., SuperAdmin, Support, Moderator
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
