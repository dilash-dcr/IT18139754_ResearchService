-- mySQL Dump
-- version 4.2.7.1

-- Host: 127.0.0.1
-- Generation Time: May 14, 2021 at 11:40 PM
-- Server version: 5.6.20


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `paf_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `research`
--

CREATE TABLE IF NOT EXISTS `research` (
`RID` int(50) NOT NULL,
  `rName` varchar(50) NOT NULL,
  `rPhone` varchar(50) NOT NULL,
  `rEmail` varchar(50) NOT NULL,
  `rAddress` varchar(20) NOT NULL,
  `projectName` varchar(20) NOT NULL,
  `rCost` varchar(50) NOT NULL
 
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `research`
--
ALTER TABLE `research`
 ADD PRIMARY KEY (`RID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `research`
--
ALTER TABLE `research`
MODIFY `bno` int(50) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

