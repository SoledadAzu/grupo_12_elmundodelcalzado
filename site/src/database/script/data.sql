-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: el_mundo_del_calzado
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carrito_de_compras`
--

DROP TABLE IF EXISTS `carrito_de_compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrito_de_compras` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_producto` int NOT NULL,
  `id_usuario` int NOT NULL,
  `id_orden` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_id_producto_idx` (`id_producto`),
  KEY `FK_id_usuario_idx` (`id_usuario`),
  KEY `FK_id_orden_idx` (`id_orden`),
  CONSTRAINT `FK_id_orden` FOREIGN KEY (`id_orden`) REFERENCES `orden` (`id`),
  CONSTRAINT `FK_id_product` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`),
  CONSTRAINT `FK_id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito_de_compras`
--

LOCK TABLES `carrito_de_compras` WRITE;
/*!40000 ALTER TABLE `carrito_de_compras` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrito_de_compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria_usuarios`
--

DROP TABLE IF EXISTS `categoria_usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria_usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria_usuarios`
--

LOCK TABLES `categoria_usuarios` WRITE;
/*!40000 ALTER TABLE `categoria_usuarios` DISABLE KEYS */;
INSERT INTO `categoria_usuarios` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `categoria_usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colores`
--

DROP TABLE IF EXISTS `colores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colores`
--

LOCK TABLES `colores` WRITE;
/*!40000 ALTER TABLE `colores` DISABLE KEYS */;
/*!40000 ALTER TABLE `colores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalles`
--

DROP TABLE IF EXISTS `detalles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `id_productos` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_id_productos_idx` (`id_productos`),
  CONSTRAINT `FK_id_productos` FOREIGN KEY (`id_productos`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalles`
--

LOCK TABLES `detalles` WRITE;
/*!40000 ALTER TABLE `detalles` DISABLE KEYS */;
/*!40000 ALTER TABLE `detalles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `generos`
--

DROP TABLE IF EXISTS `generos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `generos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generos`
--

LOCK TABLES `generos` WRITE;
/*!40000 ALTER TABLE `generos` DISABLE KEYS */;
/*!40000 ALTER TABLE `generos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes_productos`
--

DROP TABLE IF EXISTS `imagenes_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes_productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `id_producto` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_id_producto_idx` (`id_producto`),
  CONSTRAINT `FK_id_producto` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes_productos`
--

LOCK TABLES `imagenes_productos` WRITE;
/*!40000 ALTER TABLE `imagenes_productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagenes_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marcas`
--

DROP TABLE IF EXISTS `marcas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marcas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcas`
--

LOCK TABLES `marcas` WRITE;
/*!40000 ALTER TABLE `marcas` DISABLE KEYS */;
INSERT INTO `marcas` VALUES (1,'adidas'),(2,'adidas'),(3,'adidas'),(4,'adidasoriginal'),(5,'adidasoriginal'),(6,'adidasoriginal'),(7,'nike'),(8,'nike'),(9,'nike'),(10,'puma'),(11,'puma'),(12,'puma'),(13,'asics'),(14,'asics'),(15,'asics'),(16,'converse'),(17,'converse'),(18,'converse'),(19,'fila'),(20,'fila'),(21,'fila'),(22,'newbalance'),(23,'newbalance'),(24,'newbalance'),(25,'topper'),(26,'topper'),(27,'topper'),(28,'adidas'),(29,'adidas'),(30,'adidas'),(31,'adidasoriginal'),(32,'adidasoriginal'),(33,'adidasoriginal'),(34,'nike'),(35,'nike'),(36,'nike'),(37,'puma'),(38,'puma'),(39,'puma'),(40,'asics'),(41,'asics'),(42,'asics'),(43,'topper'),(44,'topper'),(45,'topper'),(46,'converse'),(47,'converse'),(48,'converse'),(49,'fila'),(50,'fila'),(51,'fila'),(52,'newbalance'),(53,'newbalance'),(54,'newbalance'),(55,'puma'),(56,'puma'),(57,'adidas'),(58,'adidas'),(59,'nike'),(60,'nike'),(61,'asics'),(62,'asics'),(63,'topper'),(64,'topper'),(65,'converse'),(66,'converse'),(67,'fila'),(68,'fila'),(69,'New Balance'),(70,'adidasoriginal'),(71,'adidasoriginal');
/*!40000 ALTER TABLE `marcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orden`
--

DROP TABLE IF EXISTS `orden`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orden` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_usuarios` int NOT NULL,
  `estado` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_id_usuarios_idx` (`id_usuarios`),
  CONSTRAINT `FK_id_usuarios` FOREIGN KEY (`id_usuarios`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orden`
--

LOCK TABLES `orden` WRITE;
/*!40000 ALTER TABLE `orden` DISABLE KEYS */;
/*!40000 ALTER TABLE `orden` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `outlets`
--

DROP TABLE IF EXISTS `outlets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `outlets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `outlets`
--

LOCK TABLES `outlets` WRITE;
/*!40000 ALTER TABLE `outlets` DISABLE KEYS */;
/*!40000 ALTER TABLE `outlets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `precio` decimal(6,2) NOT NULL,
  `descripcion` longtext NOT NULL,
  `id_generos` int NOT NULL,
  `id_marcas` int NOT NULL,
  `id_temporadas` int NOT NULL,
  `id_outlets` int NOT NULL,
  `id_talles` int NOT NULL,
  `id_colores` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_id_generos_idx` (`id_generos`),
  KEY `FK:_id_marcas_idx` (`id_marcas`),
  KEY `FK_id_temporadas_idx` (`id_temporadas`),
  KEY `FK_id_outlets_idx` (`id_outlets`),
  KEY `FK_id_talles_idx` (`id_talles`),
  KEY `FK_id_colores_idx` (`id_colores`),
  CONSTRAINT `FK_id_colores` FOREIGN KEY (`id_colores`) REFERENCES `colores` (`id`),
  CONSTRAINT `FK_id_generos` FOREIGN KEY (`id_generos`) REFERENCES `generos` (`id`),
  CONSTRAINT `FK_id_marcas` FOREIGN KEY (`id_marcas`) REFERENCES `marcas` (`id`),
  CONSTRAINT `FK_id_outlets` FOREIGN KEY (`id_outlets`) REFERENCES `outlets` (`id`),
  CONSTRAINT `FK_id_talles` FOREIGN KEY (`id_talles`) REFERENCES `talles` (`id`),
  CONSTRAINT `FK_id_temporadas` FOREIGN KEY (`id_temporadas`) REFERENCES `temporadas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talles`
--

DROP TABLE IF EXISTS `talles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `talles` (
  `id` int NOT NULL,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talles`
--

LOCK TABLES `talles` WRITE;
/*!40000 ALTER TABLE `talles` DISABLE KEYS */;
/*!40000 ALTER TABLE `talles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temporadas`
--

DROP TABLE IF EXISTS `temporadas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temporadas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temporadas`
--

LOCK TABLES `temporadas` WRITE;
/*!40000 ALTER TABLE `temporadas` DISABLE KEYS */;
/*!40000 ALTER TABLE `temporadas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `id_categoria_usuario` int NOT NULL,
  `imagen` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_id_categoria_usuario_idx` (`id_categoria_usuario`),
  CONSTRAINT `FK_id_categoria_usuario` FOREIGN KEY (`id_categoria_usuario`) REFERENCES `categoria_usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'alexander','castillo','ana@gmail.com','$2a$10$GP8HwaqLP05z9hZE7W9bcOd2nBOQ1JUClYLrqXxXxsBpO8.OBTji.',1,'default.jpg'),(2,'mariano','castro','ana@gmail.com','$2a$10$1mTgy2iXtSOWpTxKrTSRpeyh3Kp0K7jsIywZ8TEj1OeEIqqaBzUv2',1,'default.jpg'),(3,'alexander','perez','ana@gmail.com','$2a$10$y12XfunxYqrou0389bTAiOP8lCfxlu8F0LQcl75PyBhfTFNOstQny',1,'default.jpg'),(4,'sandra','morales','ana@gmail.com','$2a$10$SOYvVW9X2S/oZgMd7RHzMefZzZAdAZzJUVfCo/eTBIuvMO6HqOFfS',1,'default.jpg'),(5,'carlos','perez','ana@gmail.com','$2a$10$0p/XecV6nhuJd1yd4freO.lx.arN4NIvh6GWUliZETme0yKBmJqSe',1,'default.jpg'),(6,'mariano','perez','ana@gmail.com','$2a$10$z0Ee5hyZaO.TK3q4OQfo.uCKNN7RKNYomw5eCoGB2rO8iGApciZ62',1,'default.jpg'),(18,'mariano','castro','ana@gmail.com','$2a$10$BUK8XYCZkRCMNwLVJEEpp.jycVl1FT90VTLeaHNmlyMf6oswgqyg.',1,'default.jpg'),(19,'mariano','castro','ana@gmail.com','$2a$10$QnJ/YXvGQedVRaFaXPYVT.bO5FTYbxJQOSTYulSR4foYt2O4h56oK',1,'default.jpg'),(20,'carolina','perez','ana@gmail.com','$2a$10$UoirblI8/KP6kQkvEd9uQOKicpbouFcu4K.GQ3FD/BFjcH2YSDQlC',1,'default.jpg');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-22  0:07:00
