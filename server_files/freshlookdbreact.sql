-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: freshlookdbreact
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientes` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) NOT NULL,
  `telefone` int(9) NOT NULL,
  `idade` int(2) NOT NULL,
  `corte` varchar(25) NOT NULL,
  `preco` varchar(15) NOT NULL,
  `dia` date NOT NULL,
  `hora` time NOT NULL,
  `observ` varchar(120) NOT NULL,
  PRIMARY KEY (`id_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (93,'er',845645645,45,'Coloracao de Cabelo','200 Meticais','2022-06-10','08:00:00',''),(94,'  ',845674567,56,'Cabelo e Barba c/ Navalha','300 Meticais','2022-06-10','08:00:00','grsrre'),(95,' ',824545452,24,'Coloracao de Cabelo','200 Meticais','2022-06-11','09:00:00','432524'),(96,'Caé',824545452,24,'Coloracao de Cabelo','200 Meticais','2022-06-11','09:00:00','432524'),(97,' ',832421342,45,'Cabelo e Barba c/ Navalha','300 Meticais','2022-06-10','08:00:00',''),(98,'r',876467464,46,'Juba','100 Meticais','2022-06-10','08:00:00',''),(99,'f',854643535,34,'Escovinha Fina','130 Meticais','2022-06-10','08:00:00',''),(100,'re',845635353,34,'Barba c/ Navalha','150 Meticais','2022-06-10','08:00:00',''),(101,'df',856767565,56,'Barba c/ Maquina','100 Meticais','2022-06-15','08:00:00',''),(102,'Nome',856467456,65,'Barba c/ Maquina','100 Meticais','2022-06-18','09:00:00','');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-10 22:32:01
