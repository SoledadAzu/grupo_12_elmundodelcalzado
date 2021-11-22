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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
  `nombre` varchar(50) NOT NULL,
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
  `nombre` char(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1350 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
) ENGINE=InnoDB AUTO_INCREMENT=1350 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcas`
--

LOCK TABLES `marcas` WRITE;
/*!40000 ALTER TABLE `marcas` DISABLE KEYS */;
INSERT INTO `marcas` VALUES (1,'adidas'),(2,'adidas'),(3,'adidas'),(4,'adidasoriginal'),(5,'adidasoriginal'),(6,'adidasoriginal'),(7,'nike'),(8,'nike'),(9,'nike'),(10,'puma'),(11,'puma'),(12,'puma'),(13,'asics'),(14,'asics'),(15,'asics'),(16,'converse'),(17,'converse'),(18,'converse'),(19,'fila'),(20,'fila'),(21,'fila'),(22,'newbalance'),(23,'newbalance'),(24,'newbalance'),(25,'topper'),(26,'topper'),(27,'topper'),(28,'adidas'),(29,'adidas'),(30,'adidas'),(31,'adidasoriginal'),(32,'adidasoriginal'),(33,'adidasoriginal'),(34,'nike'),(35,'nike'),(36,'nike'),(37,'puma'),(38,'puma'),(39,'puma'),(40,'asics'),(41,'asics'),(42,'asics'),(43,'topper'),(44,'topper'),(45,'topper'),(46,'converse'),(47,'converse'),(48,'converse'),(49,'fila'),(50,'fila'),(51,'fila'),(52,'newbalance'),(53,'newbalance'),(54,'newbalance'),(55,'puma'),(56,'puma'),(57,'adidas'),(58,'adidas'),(59,'nike'),(60,'nike'),(61,'asics'),(62,'asics'),(63,'topper'),(64,'topper'),(65,'converse'),(66,'converse'),(67,'fila'),(68,'fila'),(69,'New Balance'),(70,'adidasoriginal'),(71,'adidasoriginal'),(72,'adidas'),(73,'adidas'),(74,'adidas'),(75,'adidasoriginal'),(76,'adidasoriginal'),(77,'adidasoriginal'),(78,'nike'),(79,'nike'),(80,'nike'),(81,'puma'),(82,'puma'),(83,'puma'),(84,'asics'),(85,'asics'),(86,'asics'),(87,'converse'),(88,'converse'),(89,'converse'),(90,'fila'),(91,'fila'),(92,'fila'),(93,'newbalance'),(94,'newbalance'),(95,'newbalance'),(96,'topper'),(97,'topper'),(98,'topper'),(99,'adidas'),(100,'adidas'),(101,'adidas'),(102,'adidasoriginal'),(103,'adidasoriginal'),(104,'adidasoriginal'),(105,'nike'),(106,'nike'),(107,'nike'),(108,'puma'),(109,'puma'),(110,'puma'),(111,'asics'),(112,'asics'),(113,'asics'),(114,'topper'),(115,'topper'),(116,'topper'),(117,'converse'),(118,'converse'),(119,'converse'),(120,'fila'),(121,'fila'),(122,'fila'),(123,'newbalance'),(124,'newbalance'),(125,'newbalance'),(126,'puma'),(127,'puma'),(128,'adidas'),(129,'adidas'),(130,'nike'),(131,'nike'),(132,'asics'),(133,'asics'),(134,'topper'),(135,'topper'),(136,'converse'),(137,'converse'),(138,'fila'),(139,'fila'),(140,'New Balance'),(141,'adidasoriginal'),(142,'adidasoriginal'),(143,'adidas'),(144,'adidas'),(145,'adidas'),(146,'adidasoriginal'),(147,'adidasoriginal'),(148,'adidasoriginal'),(149,'nike'),(150,'nike'),(151,'nike'),(152,'puma'),(153,'puma'),(154,'puma'),(155,'asics'),(156,'asics'),(157,'asics'),(158,'converse'),(159,'converse'),(160,'converse'),(161,'fila'),(162,'fila'),(163,'fila'),(164,'newbalance'),(165,'newbalance'),(166,'newbalance'),(167,'topper'),(168,'topper'),(169,'topper'),(170,'adidas'),(171,'adidas'),(172,'adidas'),(173,'adidasoriginal'),(174,'adidasoriginal'),(175,'adidasoriginal'),(176,'nike'),(177,'nike'),(178,'nike'),(179,'puma'),(180,'puma'),(181,'puma'),(182,'asics'),(183,'asics'),(184,'asics'),(185,'topper'),(186,'topper'),(187,'topper'),(188,'converse'),(189,'converse'),(190,'converse'),(191,'fila'),(192,'fila'),(193,'fila'),(194,'newbalance'),(195,'newbalance'),(196,'newbalance'),(197,'puma'),(198,'puma'),(199,'adidas'),(200,'adidas'),(201,'nike'),(202,'nike'),(203,'asics'),(204,'asics'),(205,'topper'),(206,'topper'),(207,'converse'),(208,'converse'),(209,'fila'),(210,'fila'),(211,'New Balance'),(212,'adidasoriginal'),(213,'adidasoriginal'),(214,'adidas'),(215,'adidas'),(216,'adidas'),(217,'adidasoriginal'),(218,'adidasoriginal'),(219,'adidasoriginal'),(220,'nike'),(221,'nike'),(222,'nike'),(223,'puma'),(224,'puma'),(225,'puma'),(226,'asics'),(227,'asics'),(228,'asics'),(229,'converse'),(230,'converse'),(231,'converse'),(232,'fila'),(233,'fila'),(234,'fila'),(235,'newbalance'),(236,'newbalance'),(237,'newbalance'),(238,'topper'),(239,'topper'),(240,'topper'),(241,'adidas'),(242,'adidas'),(243,'adidas'),(244,'adidasoriginal'),(245,'adidasoriginal'),(246,'adidasoriginal'),(247,'nike'),(248,'nike'),(249,'nike'),(250,'puma'),(251,'puma'),(252,'puma'),(253,'asics'),(254,'asics'),(255,'asics'),(256,'topper'),(257,'topper'),(258,'topper'),(259,'converse'),(260,'converse'),(261,'converse'),(262,'fila'),(263,'fila'),(264,'fila'),(265,'newbalance'),(266,'newbalance'),(267,'newbalance'),(268,'puma'),(269,'puma'),(270,'adidas'),(271,'adidas'),(272,'nike'),(273,'nike'),(274,'asics'),(275,'asics'),(276,'topper'),(277,'topper'),(278,'converse'),(279,'converse'),(280,'fila'),(281,'fila'),(282,'New Balance'),(283,'adidasoriginal'),(284,'adidasoriginal'),(285,'adidas'),(286,'adidas'),(287,'adidas'),(288,'adidasoriginal'),(289,'adidasoriginal'),(290,'adidasoriginal'),(291,'nike'),(292,'nike'),(293,'nike'),(294,'puma'),(295,'puma'),(296,'puma'),(297,'asics'),(298,'asics'),(299,'asics'),(300,'converse'),(301,'converse'),(302,'converse'),(303,'fila'),(304,'fila'),(305,'fila'),(306,'newbalance'),(307,'newbalance'),(308,'newbalance'),(309,'topper'),(310,'topper'),(311,'topper'),(312,'adidas'),(313,'adidas'),(314,'adidas'),(315,'adidasoriginal'),(316,'adidasoriginal'),(317,'adidasoriginal'),(318,'nike'),(319,'nike'),(320,'nike'),(321,'puma'),(322,'puma'),(323,'puma'),(324,'asics'),(325,'asics'),(326,'asics'),(327,'topper'),(328,'topper'),(329,'topper'),(330,'converse'),(331,'converse'),(332,'converse'),(333,'fila'),(334,'fila'),(335,'fila'),(336,'newbalance'),(337,'newbalance'),(338,'newbalance'),(339,'puma'),(340,'puma'),(341,'adidas'),(342,'adidas'),(343,'nike'),(344,'nike'),(345,'asics'),(346,'asics'),(347,'topper'),(348,'topper'),(349,'converse'),(350,'converse'),(351,'fila'),(352,'fila'),(353,'New Balance'),(354,'adidasoriginal'),(355,'adidasoriginal'),(356,'adidas'),(357,'adidas'),(358,'adidas'),(359,'adidasoriginal'),(360,'adidasoriginal'),(361,'adidasoriginal'),(362,'nike'),(363,'nike'),(364,'nike'),(365,'puma'),(366,'puma'),(367,'puma'),(368,'asics'),(369,'asics'),(370,'asics'),(371,'converse'),(372,'converse'),(373,'converse'),(374,'fila'),(375,'fila'),(376,'fila'),(377,'newbalance'),(378,'newbalance'),(379,'newbalance'),(380,'topper'),(381,'topper'),(382,'topper'),(383,'adidas'),(384,'adidas'),(385,'adidas'),(386,'adidasoriginal'),(387,'adidasoriginal'),(388,'adidasoriginal'),(389,'nike'),(390,'nike'),(391,'nike'),(392,'puma'),(393,'puma'),(394,'puma'),(395,'asics'),(396,'asics'),(397,'asics'),(398,'topper'),(399,'topper'),(400,'topper'),(401,'converse'),(402,'converse'),(403,'converse'),(404,'fila'),(405,'fila'),(406,'fila'),(407,'newbalance'),(408,'newbalance'),(409,'newbalance'),(410,'puma'),(411,'puma'),(412,'adidas'),(413,'adidas'),(414,'nike'),(415,'nike'),(416,'asics'),(417,'asics'),(418,'topper'),(419,'topper'),(420,'converse'),(421,'converse'),(422,'fila'),(423,'fila'),(424,'New Balance'),(425,'adidasoriginal'),(426,'adidasoriginal'),(427,'adidas'),(428,'adidas'),(429,'adidas'),(430,'adidasoriginal'),(431,'adidasoriginal'),(432,'adidasoriginal'),(433,'nike'),(434,'nike'),(435,'nike'),(436,'puma'),(437,'puma'),(438,'puma'),(439,'asics'),(440,'asics'),(441,'asics'),(442,'converse'),(443,'converse'),(444,'converse'),(445,'fila'),(446,'fila'),(447,'fila'),(448,'newbalance'),(449,'newbalance'),(450,'newbalance'),(451,'topper'),(452,'topper'),(453,'topper'),(454,'adidas'),(455,'adidas'),(456,'adidas'),(457,'adidasoriginal'),(458,'adidasoriginal'),(459,'adidasoriginal'),(460,'nike'),(461,'nike'),(462,'nike'),(463,'puma'),(464,'puma'),(465,'puma'),(466,'asics'),(467,'asics'),(468,'asics'),(469,'topper'),(470,'topper'),(471,'topper'),(472,'converse'),(473,'converse'),(474,'converse'),(475,'fila'),(476,'fila'),(477,'fila'),(478,'newbalance'),(479,'newbalance'),(480,'newbalance'),(481,'puma'),(482,'puma'),(483,'adidas'),(484,'adidas'),(485,'nike'),(486,'nike'),(487,'asics'),(488,'asics'),(489,'topper'),(490,'topper'),(491,'converse'),(492,'converse'),(493,'fila'),(494,'fila'),(495,'New Balance'),(496,'adidasoriginal'),(497,'adidasoriginal'),(498,'adidas'),(499,'adidas'),(500,'adidas'),(501,'adidasoriginal'),(502,'adidasoriginal'),(503,'adidasoriginal'),(504,'nike'),(505,'nike'),(506,'nike'),(507,'puma'),(508,'puma'),(509,'puma'),(510,'asics'),(511,'asics'),(512,'asics'),(513,'converse'),(514,'converse'),(515,'converse'),(516,'fila'),(517,'fila'),(518,'fila'),(519,'newbalance'),(520,'newbalance'),(521,'newbalance'),(522,'topper'),(523,'topper'),(524,'topper'),(525,'adidas'),(526,'adidas'),(527,'adidas'),(528,'adidasoriginal'),(529,'adidasoriginal'),(530,'adidasoriginal'),(531,'nike'),(532,'nike'),(533,'nike'),(534,'puma'),(535,'puma'),(536,'puma'),(537,'asics'),(538,'asics'),(539,'asics'),(540,'topper'),(541,'topper'),(542,'topper'),(543,'converse'),(544,'converse'),(545,'converse'),(546,'fila'),(547,'fila'),(548,'fila'),(549,'newbalance'),(550,'newbalance'),(551,'newbalance'),(552,'puma'),(553,'puma'),(554,'adidas'),(555,'adidas'),(556,'nike'),(557,'nike'),(558,'asics'),(559,'asics'),(560,'topper'),(561,'topper'),(562,'converse'),(563,'converse'),(564,'fila'),(565,'fila'),(566,'New Balance'),(567,'adidasoriginal'),(568,'adidasoriginal'),(569,'adidas'),(570,'adidas'),(571,'adidas'),(572,'adidasoriginal'),(573,'adidasoriginal'),(574,'adidasoriginal'),(575,'nike'),(576,'nike'),(577,'nike'),(578,'puma'),(579,'puma'),(580,'puma'),(581,'asics'),(582,'asics'),(583,'asics'),(584,'converse'),(585,'converse'),(586,'converse'),(587,'fila'),(588,'fila'),(589,'fila'),(590,'newbalance'),(591,'newbalance'),(592,'newbalance'),(593,'topper'),(594,'topper'),(595,'topper'),(596,'adidas'),(597,'adidas'),(598,'adidas'),(599,'adidasoriginal'),(600,'adidasoriginal'),(601,'adidasoriginal'),(602,'nike'),(603,'nike'),(604,'nike'),(605,'puma'),(606,'puma'),(607,'puma'),(608,'asics'),(609,'asics'),(610,'asics'),(611,'topper'),(612,'topper'),(613,'topper'),(614,'converse'),(615,'converse'),(616,'converse'),(617,'fila'),(618,'fila'),(619,'fila'),(620,'newbalance'),(621,'newbalance'),(622,'newbalance'),(623,'puma'),(624,'puma'),(625,'adidas'),(626,'adidas'),(627,'nike'),(628,'nike'),(629,'asics'),(630,'asics'),(631,'topper'),(632,'topper'),(633,'converse'),(634,'converse'),(635,'fila'),(636,'fila'),(637,'New Balance'),(638,'adidasoriginal'),(639,'adidasoriginal'),(640,'adidas'),(641,'adidas'),(642,'adidas'),(643,'adidasoriginal'),(644,'adidasoriginal'),(645,'adidasoriginal'),(646,'nike'),(647,'nike'),(648,'nike'),(649,'puma'),(650,'puma'),(651,'puma'),(652,'asics'),(653,'asics'),(654,'asics'),(655,'converse'),(656,'converse'),(657,'converse'),(658,'fila'),(659,'fila'),(660,'fila'),(661,'newbalance'),(662,'newbalance'),(663,'newbalance'),(664,'topper'),(665,'topper'),(666,'topper'),(667,'adidas'),(668,'adidas'),(669,'adidas'),(670,'adidasoriginal'),(671,'adidasoriginal'),(672,'adidasoriginal'),(673,'nike'),(674,'nike'),(675,'nike'),(676,'puma'),(677,'puma'),(678,'puma'),(679,'asics'),(680,'asics'),(681,'asics'),(682,'topper'),(683,'topper'),(684,'topper'),(685,'converse'),(686,'converse'),(687,'converse'),(688,'fila'),(689,'fila'),(690,'fila'),(691,'newbalance'),(692,'newbalance'),(693,'newbalance'),(694,'puma'),(695,'puma'),(696,'adidas'),(697,'adidas'),(698,'nike'),(699,'nike'),(700,'asics'),(701,'asics'),(702,'topper'),(703,'topper'),(704,'converse'),(705,'converse'),(706,'fila'),(707,'fila'),(708,'New Balance'),(709,'adidasoriginal'),(710,'adidasoriginal'),(711,'adidas'),(712,'adidas'),(713,'adidas'),(714,'adidasoriginal'),(715,'adidasoriginal'),(716,'adidasoriginal'),(717,'nike'),(718,'nike'),(719,'nike'),(720,'puma'),(721,'puma'),(722,'puma'),(723,'asics'),(724,'asics'),(725,'asics'),(726,'converse'),(727,'converse'),(728,'converse'),(729,'fila'),(730,'fila'),(731,'fila'),(732,'newbalance'),(733,'newbalance'),(734,'newbalance'),(735,'topper'),(736,'topper'),(737,'topper'),(738,'adidas'),(739,'adidas'),(740,'adidas'),(741,'adidasoriginal'),(742,'adidasoriginal'),(743,'adidasoriginal'),(744,'nike'),(745,'nike'),(746,'nike'),(747,'puma'),(748,'puma'),(749,'puma'),(750,'asics'),(751,'asics'),(752,'asics'),(753,'topper'),(754,'topper'),(755,'topper'),(756,'converse'),(757,'converse'),(758,'converse'),(759,'fila'),(760,'fila'),(761,'fila'),(762,'newbalance'),(763,'newbalance'),(764,'newbalance'),(765,'puma'),(766,'puma'),(767,'adidas'),(768,'adidas'),(769,'nike'),(770,'nike'),(771,'asics'),(772,'asics'),(773,'topper'),(774,'topper'),(775,'converse'),(776,'converse'),(777,'fila'),(778,'fila'),(779,'New Balance'),(780,'adidasoriginal'),(781,'adidasoriginal'),(782,'adidas'),(783,'adidas'),(784,'adidas'),(785,'adidasoriginal'),(786,'adidasoriginal'),(787,'adidasoriginal'),(788,'nike'),(789,'nike'),(790,'nike'),(791,'puma'),(792,'puma'),(793,'puma'),(794,'asics'),(795,'asics'),(796,'asics'),(797,'converse'),(798,'converse'),(799,'converse'),(800,'fila'),(801,'fila'),(802,'fila'),(803,'newbalance'),(804,'newbalance'),(805,'newbalance'),(806,'topper'),(807,'topper'),(808,'topper'),(809,'adidas'),(810,'adidas'),(811,'adidas'),(812,'adidasoriginal'),(813,'adidasoriginal'),(814,'adidasoriginal'),(815,'nike'),(816,'nike'),(817,'nike'),(818,'puma'),(819,'puma'),(820,'puma'),(821,'asics'),(822,'asics'),(823,'asics'),(824,'topper'),(825,'topper'),(826,'topper'),(827,'converse'),(828,'converse'),(829,'converse'),(830,'fila'),(831,'fila'),(832,'fila'),(833,'newbalance'),(834,'newbalance'),(835,'newbalance'),(836,'puma'),(837,'puma'),(838,'adidas'),(839,'adidas'),(840,'nike'),(841,'nike'),(842,'asics'),(843,'asics'),(844,'topper'),(845,'topper'),(846,'converse'),(847,'converse'),(848,'fila'),(849,'fila'),(850,'New Balance'),(851,'adidasoriginal'),(852,'adidasoriginal'),(853,'adidas'),(854,'adidas'),(855,'adidas'),(856,'adidasoriginal'),(857,'adidasoriginal'),(858,'adidasoriginal'),(859,'nike'),(860,'nike'),(861,'nike'),(862,'puma'),(863,'puma'),(864,'puma'),(865,'asics'),(866,'asics'),(867,'asics'),(868,'converse'),(869,'converse'),(870,'converse'),(871,'fila'),(872,'fila'),(873,'fila'),(874,'newbalance'),(875,'newbalance'),(876,'newbalance'),(877,'topper'),(878,'topper'),(879,'topper'),(880,'adidas'),(881,'adidas'),(882,'adidas'),(883,'adidasoriginal'),(884,'adidasoriginal'),(885,'adidasoriginal'),(886,'nike'),(887,'nike'),(888,'nike'),(889,'puma'),(890,'puma'),(891,'puma'),(892,'asics'),(893,'asics'),(894,'asics'),(895,'topper'),(896,'topper'),(897,'topper'),(898,'converse'),(899,'converse'),(900,'converse'),(901,'fila'),(902,'fila'),(903,'fila'),(904,'newbalance'),(905,'newbalance'),(906,'newbalance'),(907,'puma'),(908,'puma'),(909,'adidas'),(910,'adidas'),(911,'nike'),(912,'nike'),(913,'asics'),(914,'asics'),(915,'topper'),(916,'topper'),(917,'converse'),(918,'converse'),(919,'fila'),(920,'fila'),(921,'New Balance'),(922,'adidasoriginal'),(923,'adidasoriginal'),(924,'adidas'),(925,'adidas'),(926,'adidas'),(927,'adidasoriginal'),(928,'adidasoriginal'),(929,'adidasoriginal'),(930,'nike'),(931,'nike'),(932,'nike'),(933,'puma'),(934,'puma'),(935,'puma'),(936,'asics'),(937,'asics'),(938,'asics'),(939,'converse'),(940,'converse'),(941,'converse'),(942,'fila'),(943,'fila'),(944,'fila'),(945,'newbalance'),(946,'newbalance'),(947,'newbalance'),(948,'topper'),(949,'topper'),(950,'topper'),(951,'adidas'),(952,'adidas'),(953,'adidas'),(954,'adidasoriginal'),(955,'adidasoriginal'),(956,'adidasoriginal'),(957,'nike'),(958,'nike'),(959,'nike'),(960,'puma'),(961,'puma'),(962,'puma'),(963,'asics'),(964,'asics'),(965,'asics'),(966,'topper'),(967,'topper'),(968,'topper'),(969,'converse'),(970,'converse'),(971,'converse'),(972,'fila'),(973,'fila'),(974,'fila'),(975,'newbalance'),(976,'newbalance'),(977,'newbalance'),(978,'puma'),(979,'puma'),(980,'adidas'),(981,'adidas'),(982,'nike'),(983,'nike'),(984,'asics'),(985,'asics'),(986,'topper'),(987,'topper'),(988,'converse'),(989,'converse'),(990,'fila'),(991,'fila'),(992,'New Balance'),(993,'adidasoriginal'),(994,'adidasoriginal'),(995,'adidas'),(996,'adidas'),(997,'adidas'),(998,'adidasoriginal'),(999,'adidasoriginal'),(1000,'adidasoriginal'),(1001,'nike'),(1002,'nike'),(1003,'nike'),(1004,'puma'),(1005,'puma'),(1006,'puma'),(1007,'asics'),(1008,'asics'),(1009,'asics'),(1010,'converse'),(1011,'converse'),(1012,'converse'),(1013,'fila'),(1014,'fila'),(1015,'fila'),(1016,'newbalance'),(1017,'newbalance'),(1018,'newbalance'),(1019,'topper'),(1020,'topper'),(1021,'topper'),(1022,'adidas'),(1023,'adidas'),(1024,'adidas'),(1025,'adidasoriginal'),(1026,'adidasoriginal'),(1027,'adidasoriginal'),(1028,'nike'),(1029,'nike'),(1030,'nike'),(1031,'puma'),(1032,'puma'),(1033,'puma'),(1034,'asics'),(1035,'asics'),(1036,'asics'),(1037,'topper'),(1038,'topper'),(1039,'topper'),(1040,'converse'),(1041,'converse'),(1042,'converse'),(1043,'fila'),(1044,'fila'),(1045,'fila'),(1046,'newbalance'),(1047,'newbalance'),(1048,'newbalance'),(1049,'puma'),(1050,'puma'),(1051,'adidas'),(1052,'adidas'),(1053,'nike'),(1054,'nike'),(1055,'asics'),(1056,'asics'),(1057,'topper'),(1058,'topper'),(1059,'converse'),(1060,'converse'),(1061,'fila'),(1062,'fila'),(1063,'New Balance'),(1064,'adidasoriginal'),(1065,'adidasoriginal'),(1066,'adidas'),(1067,'adidas'),(1068,'adidas'),(1069,'adidasoriginal'),(1070,'adidasoriginal'),(1071,'adidasoriginal'),(1072,'nike'),(1073,'nike'),(1074,'nike'),(1075,'puma'),(1076,'puma'),(1077,'puma'),(1078,'asics'),(1079,'asics'),(1080,'asics'),(1081,'converse'),(1082,'converse'),(1083,'converse'),(1084,'fila'),(1085,'fila'),(1086,'fila'),(1087,'newbalance'),(1088,'newbalance'),(1089,'newbalance'),(1090,'topper'),(1091,'topper'),(1092,'topper'),(1093,'adidas'),(1094,'adidas'),(1095,'adidas'),(1096,'adidasoriginal'),(1097,'adidasoriginal'),(1098,'adidasoriginal'),(1099,'nike'),(1100,'nike'),(1101,'nike'),(1102,'puma'),(1103,'puma'),(1104,'puma'),(1105,'asics'),(1106,'asics'),(1107,'asics'),(1108,'topper'),(1109,'topper'),(1110,'topper'),(1111,'converse'),(1112,'converse'),(1113,'converse'),(1114,'fila'),(1115,'fila'),(1116,'fila'),(1117,'newbalance'),(1118,'newbalance'),(1119,'newbalance'),(1120,'puma'),(1121,'puma'),(1122,'adidas'),(1123,'adidas'),(1124,'nike'),(1125,'nike'),(1126,'asics'),(1127,'asics'),(1128,'topper'),(1129,'topper'),(1130,'converse'),(1131,'converse'),(1132,'fila'),(1133,'fila'),(1134,'New Balance'),(1135,'adidasoriginal'),(1136,'adidasoriginal'),(1137,'adidas'),(1138,'adidas'),(1139,'adidas'),(1140,'adidasoriginal'),(1141,'adidasoriginal'),(1142,'adidasoriginal'),(1143,'nike'),(1144,'nike'),(1145,'nike'),(1146,'puma'),(1147,'puma'),(1148,'puma'),(1149,'asics'),(1150,'asics'),(1151,'asics'),(1152,'converse'),(1153,'converse'),(1154,'converse'),(1155,'fila'),(1156,'fila'),(1157,'fila'),(1158,'newbalance'),(1159,'newbalance'),(1160,'newbalance'),(1161,'topper'),(1162,'topper'),(1163,'topper'),(1164,'adidas'),(1165,'adidas'),(1166,'adidas'),(1167,'adidasoriginal'),(1168,'adidasoriginal'),(1169,'adidasoriginal'),(1170,'nike'),(1171,'nike'),(1172,'nike'),(1173,'puma'),(1174,'puma'),(1175,'puma'),(1176,'asics'),(1177,'asics'),(1178,'asics'),(1179,'topper'),(1180,'topper'),(1181,'topper'),(1182,'converse'),(1183,'converse'),(1184,'converse'),(1185,'fila'),(1186,'fila'),(1187,'fila'),(1188,'newbalance'),(1189,'newbalance'),(1190,'newbalance'),(1191,'puma'),(1192,'puma'),(1193,'adidas'),(1194,'adidas'),(1195,'nike'),(1196,'nike'),(1197,'asics'),(1198,'asics'),(1199,'topper'),(1200,'topper'),(1201,'converse'),(1202,'converse'),(1203,'fila'),(1204,'fila'),(1205,'New Balance'),(1206,'adidasoriginal'),(1207,'adidasoriginal'),(1208,'adidas'),(1209,'adidas'),(1210,'adidas'),(1211,'adidasoriginal'),(1212,'adidasoriginal'),(1213,'adidasoriginal'),(1214,'nike'),(1215,'nike'),(1216,'nike'),(1217,'puma'),(1218,'puma'),(1219,'puma'),(1220,'asics'),(1221,'asics'),(1222,'asics'),(1223,'converse'),(1224,'converse'),(1225,'converse'),(1226,'fila'),(1227,'fila'),(1228,'fila'),(1229,'newbalance'),(1230,'newbalance'),(1231,'newbalance'),(1232,'topper'),(1233,'topper'),(1234,'topper'),(1235,'adidas'),(1236,'adidas'),(1237,'adidas'),(1238,'adidasoriginal'),(1239,'adidasoriginal'),(1240,'adidasoriginal'),(1241,'nike'),(1242,'nike'),(1243,'nike'),(1244,'puma'),(1245,'puma'),(1246,'puma'),(1247,'asics'),(1248,'asics'),(1249,'asics'),(1250,'topper'),(1251,'topper'),(1252,'topper'),(1253,'converse'),(1254,'converse'),(1255,'converse'),(1256,'fila'),(1257,'fila'),(1258,'fila'),(1259,'newbalance'),(1260,'newbalance'),(1261,'newbalance'),(1262,'puma'),(1263,'puma'),(1264,'adidas'),(1265,'adidas'),(1266,'nike'),(1267,'nike'),(1268,'asics'),(1269,'asics'),(1270,'topper'),(1271,'topper'),(1272,'converse'),(1273,'converse'),(1274,'fila'),(1275,'fila'),(1276,'New Balance'),(1277,'adidasoriginal'),(1278,'adidasoriginal'),(1279,'adidas'),(1280,'adidas'),(1281,'adidas'),(1282,'adidasoriginal'),(1283,'adidasoriginal'),(1284,'adidasoriginal'),(1285,'nike'),(1286,'nike'),(1287,'nike'),(1288,'puma'),(1289,'puma'),(1290,'puma'),(1291,'asics'),(1292,'asics'),(1293,'asics'),(1294,'converse'),(1295,'converse'),(1296,'converse'),(1297,'fila'),(1298,'fila'),(1299,'fila'),(1300,'newbalance'),(1301,'newbalance'),(1302,'newbalance'),(1303,'topper'),(1304,'topper'),(1305,'topper'),(1306,'adidas'),(1307,'adidas'),(1308,'adidas'),(1309,'adidasoriginal'),(1310,'adidasoriginal'),(1311,'adidasoriginal'),(1312,'nike'),(1313,'nike'),(1314,'nike'),(1315,'puma'),(1316,'puma'),(1317,'puma'),(1318,'asics'),(1319,'asics'),(1320,'asics'),(1321,'topper'),(1322,'topper'),(1323,'topper'),(1324,'converse'),(1325,'converse'),(1326,'converse'),(1327,'fila'),(1328,'fila'),(1329,'fila'),(1330,'newbalance'),(1331,'newbalance'),(1332,'newbalance'),(1333,'puma'),(1334,'puma'),(1335,'adidas'),(1336,'adidas'),(1337,'nike'),(1338,'nike'),(1339,'asics'),(1340,'asics'),(1341,'topper'),(1342,'topper'),(1343,'converse'),(1344,'converse'),(1345,'fila'),(1346,'fila'),(1347,'New Balance'),(1348,'adidasoriginal'),(1349,'adidasoriginal');
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
  `nombre` tinyint(2) unsigned zerofill NOT NULL,
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
  `nombre` char(2) NOT NULL,
  PRIMARY KEY (`id`,`nombre`)
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
  `nombre` tinyint(2) unsigned zerofill NOT NULL,
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
