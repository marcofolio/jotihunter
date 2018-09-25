CREATE TABLE IF NOT EXISTS `cars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text COLLATE latin1_general_ci NOT NULL,
  `time` varchar(8) COLLATE latin1_general_ci DEFAULT NULL,
  `lat` varchar(25) COLLATE latin1_general_ci DEFAULT NULL,
  `lng` varchar(25) COLLATE latin1_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `coordinates` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `update_date` varchar(25) COLLATE latin1_general_ci NOT NULL,
  `hint_id` varchar(24) COLLATE latin1_general_ci NOT NULL,
  `hint_name` text COLLATE latin1_general_ci NOT NULL,
  `hint_date` varchar(25) COLLATE latin1_general_ci NOT NULL,
  `hint_time` varchar(8) COLLATE latin1_general_ci NOT NULL,
  `solve_time` varchar(8) COLLATE latin1_general_ci NOT NULL,
  `data` text COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `hunts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text COLLATE latin1_general_ci NOT NULL,
  `time` varchar(8) COLLATE latin1_general_ci NOT NULL,
  `lat` varchar(25) COLLATE latin1_general_ci DEFAULT NULL,
  `lng` varchar(25) COLLATE latin1_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
);