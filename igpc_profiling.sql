-- MariaDB dump 10.19  Distrib 10.6.12-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: sql    Database: igpc_profiling
-- ------------------------------------------------------
-- Server version	10.6.12-MariaDB-0ubuntu0.22.04.1

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
-- Table structure for table `ezbinaryfile`
--

DROP TABLE IF EXISTS `ezbinaryfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezbinaryfile` (
  `contentobject_attribute_id` int(11) NOT NULL DEFAULT 0,
  `version` int(11) NOT NULL DEFAULT 0,
  `download_count` int(11) NOT NULL DEFAULT 0,
  `filename` varchar(255) NOT NULL DEFAULT '',
  `mime_type` varchar(255) NOT NULL DEFAULT '',
  `original_filename` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`contentobject_attribute_id`,`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezbinaryfile`
--

LOCK TABLES `ezbinaryfile` WRITE;
/*!40000 ALTER TABLE `ezbinaryfile` DISABLE KEYS */;
/*!40000 ALTER TABLE `ezbinaryfile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezcobj_state`
--

DROP TABLE IF EXISTS `ezcobj_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezcobj_state` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `default_language_id` bigint(20) NOT NULL DEFAULT 0,
  `group_id` int(11) NOT NULL DEFAULT 0,
  `identifier` varchar(45) NOT NULL DEFAULT '',
  `language_mask` bigint(20) NOT NULL DEFAULT 0,
  `priority` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ezcobj_state_identifier` (`group_id`,`identifier`),
  KEY `ezcobj_state_priority` (`priority`),
  KEY `ezcobj_state_lmask` (`language_mask`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezcobj_state`
--

LOCK TABLES `ezcobj_state` WRITE;
/*!40000 ALTER TABLE `ezcobj_state` DISABLE KEYS */;
INSERT INTO `ezcobj_state` VALUES (1,2,2,'not_locked',3,0),(2,2,2,'locked',3,1);
/*!40000 ALTER TABLE `ezcobj_state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezcobj_state_group`
--

DROP TABLE IF EXISTS `ezcobj_state_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezcobj_state_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `default_language_id` bigint(20) NOT NULL DEFAULT 0,
  `identifier` varchar(45) NOT NULL DEFAULT '',
  `language_mask` bigint(20) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ezcobj_state_group_identifier` (`identifier`),
  KEY `ezcobj_state_group_lmask` (`language_mask`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezcobj_state_group`
--

LOCK TABLES `ezcobj_state_group` WRITE;
/*!40000 ALTER TABLE `ezcobj_state_group` DISABLE KEYS */;
INSERT INTO `ezcobj_state_group` VALUES (2,2,'ez_lock',3);
/*!40000 ALTER TABLE `ezcobj_state_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezcobj_state_group_language`
--

DROP TABLE IF EXISTS `ezcobj_state_group_language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezcobj_state_group_language` (
  `contentobject_state_group_id` int(11) NOT NULL DEFAULT 0,
  `real_language_id` bigint(20) NOT NULL DEFAULT 0,
  `description` longtext NOT NULL,
  `language_id` bigint(20) NOT NULL DEFAULT 0,
  `name` varchar(45) NOT NULL DEFAULT '',
  PRIMARY KEY (`contentobject_state_group_id`,`real_language_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezcobj_state_group_language`
--

LOCK TABLES `ezcobj_state_group_language` WRITE;
/*!40000 ALTER TABLE `ezcobj_state_group_language` DISABLE KEYS */;
INSERT INTO `ezcobj_state_group_language` VALUES (2,2,'',3,'Lock');
/*!40000 ALTER TABLE `ezcobj_state_group_language` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezcobj_state_language`
--

DROP TABLE IF EXISTS `ezcobj_state_language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezcobj_state_language` (
  `contentobject_state_id` int(11) NOT NULL DEFAULT 0,
  `language_id` bigint(20) NOT NULL DEFAULT 0,
  `description` longtext NOT NULL,
  `name` varchar(45) NOT NULL DEFAULT '',
  PRIMARY KEY (`contentobject_state_id`,`language_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezcobj_state_language`
--

LOCK TABLES `ezcobj_state_language` WRITE;
/*!40000 ALTER TABLE `ezcobj_state_language` DISABLE KEYS */;
INSERT INTO `ezcobj_state_language` VALUES (1,3,'','Not locked'),(2,3,'','Locked');
/*!40000 ALTER TABLE `ezcobj_state_language` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezcobj_state_link`
--

DROP TABLE IF EXISTS `ezcobj_state_link`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezcobj_state_link` (
  `contentobject_id` int(11) NOT NULL DEFAULT 0,
  `contentobject_state_id` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`contentobject_id`,`contentobject_state_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezcobj_state_link`
--

LOCK TABLES `ezcobj_state_link` WRITE;
/*!40000 ALTER TABLE `ezcobj_state_link` DISABLE KEYS */;
INSERT INTO `ezcobj_state_link` VALUES (1,1),(4,1),(10,1),(11,1),(12,1),(13,1),(14,1),(41,1),(42,1),(49,1),(50,1),(51,1),(52,1),(53,1),(54,1),(55,1),(56,1),(57,1),(58,1),(59,1),(60,1),(61,1);
/*!40000 ALTER TABLE `ezcobj_state_link` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezcontent_language`
--

DROP TABLE IF EXISTS `ezcontent_language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezcontent_language` (
  `id` bigint(20) NOT NULL DEFAULT 0,
  `disabled` int(11) NOT NULL DEFAULT 0,
  `locale` varchar(20) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `ezcontent_language_name` (`name`(191))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezcontent_language`
--

LOCK TABLES `ezcontent_language` WRITE;
/*!40000 ALTER TABLE `ezcontent_language` DISABLE KEYS */;
INSERT INTO `ezcontent_language` VALUES (2,0,'eng-GB','English (United Kingdom)');
/*!40000 ALTER TABLE `ezcontent_language` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezcontentbrowsebookmark`
--

DROP TABLE IF EXISTS `ezcontentbrowsebookmark`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezcontentbrowsebookmark` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `node_id` int(11) NOT NULL DEFAULT 0,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `name` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `ezcontentbrowsebookmark_location` (`node_id`),
  KEY `ezcontentbrowsebookmark_user` (`user_id`),
  KEY `ezcontentbrowsebookmark_user_location` (`user_id`,`node_id`),
  CONSTRAINT `ezcontentbrowsebookmark_location_fk` FOREIGN KEY (`node_id`) REFERENCES `ezcontentobject_tree` (`node_id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `ezcontentbrowsebookmark_user_fk` FOREIGN KEY (`user_id`) REFERENCES `ezuser` (`contentobject_id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezcontentbrowsebookmark`
--

LOCK TABLES `ezcontentbrowsebookmark` WRITE;
/*!40000 ALTER TABLE `ezcontentbrowsebookmark` DISABLE KEYS */;
/*!40000 ALTER TABLE `ezcontentbrowsebookmark` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezcontentclass`
--

DROP TABLE IF EXISTS `ezcontentclass`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezcontentclass` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `version` int(11) NOT NULL DEFAULT 0,
  `always_available` int(11) NOT NULL DEFAULT 0,
  `contentobject_name` varchar(255) DEFAULT NULL,
  `created` int(11) NOT NULL DEFAULT 0,
  `creator_id` int(11) NOT NULL DEFAULT 0,
  `identifier` varchar(50) NOT NULL DEFAULT '',
  `initial_language_id` bigint(20) NOT NULL DEFAULT 0,
  `is_container` int(11) NOT NULL DEFAULT 0,
  `language_mask` bigint(20) NOT NULL DEFAULT 0,
  `modified` int(11) NOT NULL DEFAULT 0,
  `modifier_id` int(11) NOT NULL DEFAULT 0,
  `remote_id` varchar(100) NOT NULL DEFAULT '',
  `serialized_description_list` longtext DEFAULT NULL,
  `serialized_name_list` longtext DEFAULT NULL,
  `sort_field` int(11) NOT NULL DEFAULT 1,
  `sort_order` int(11) NOT NULL DEFAULT 1,
  `url_alias_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`,`version`),
  KEY `ezcontentclass_version` (`version`),
  KEY `ezcontentclass_identifier` (`identifier`,`version`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezcontentclass`
--

LOCK TABLES `ezcontentclass` WRITE;
/*!40000 ALTER TABLE `ezcontentclass` DISABLE KEYS */;
INSERT INTO `ezcontentclass` VALUES (1,0,1,'<short_name|name>',1024392098,14,'folder',2,1,2,1448831672,14,'a3d405b81be900468eb153d774f4f0d2','a:0:{}','a:1:{s:6:\"eng-GB\";s:6:\"Folder\";}',1,1,NULL),(2,0,0,'<short_title|title>',1024392098,14,'article',2,1,3,1082454989,14,'c15b600eb9198b1924063b5a68758232',NULL,'a:2:{s:6:\"eng-GB\";s:7:\"Article\";s:16:\"always-available\";s:6:\"eng-GB\";}',1,1,NULL),(3,0,1,'<name>',1024392098,14,'user_group',2,1,3,1048494743,14,'25b4268cdcd01921b808a0d854b877ef',NULL,'a:2:{s:6:\"eng-GB\";s:10:\"User group\";s:16:\"always-available\";s:6:\"eng-GB\";}',1,1,NULL),(4,0,1,'<first_name> <last_name>',1024392098,14,'user',2,0,2,1705189083,14,'40faa822edc579b02c25f6bb7beec3ad','a:1:{s:6:\"eng-GB\";N;}','a:1:{s:6:\"eng-GB\";s:4:\"User\";}',1,1,''),(5,0,1,'<name>',1031484992,14,'image',2,0,3,1048494784,14,'f6df12aa74e36230eb675f364fccd25a',NULL,'a:2:{s:6:\"eng-GB\";s:5:\"Image\";s:16:\"always-available\";s:6:\"eng-GB\";}',1,1,NULL),(12,0,1,'<name>',1052385472,14,'file',2,0,3,1052385669,14,'637d58bfddf164627bdfd265733280a0',NULL,'a:2:{s:6:\"eng-GB\";s:4:\"File\";s:16:\"always-available\";s:6:\"eng-GB\";}',1,1,NULL),(13,0,1,'<name>',1705188117,14,'tag',2,0,2,1705188117,14,'3007ca2440d040724ebf1977996c1579','a:0:{}','a:1:{s:6:\"eng-GB\";s:3:\"Tag\";}',2,0,''),(14,0,1,'<name|identifier>',1705188118,14,'product_category_tag',2,0,2,1705188118,14,'3a74cdc62d014232be15532071aa8d03','a:0:{}','a:1:{s:6:\"eng-GB\";s:16:\"Product Category\";}',2,0,''),(15,0,1,'<name>',1705188387,14,'category',2,1,2,1705188579,14,'9a2cbd4689f04c8ce85461f52a75dd11','a:1:{s:6:\"eng-GB\";N;}','a:1:{s:6:\"eng-GB\";s:8:\"Category\";}',2,0,''),(16,0,1,'<title>',1705188446,14,'post',2,1,2,1705188567,14,'9dd11a98ab88c16cc1fef950bea8b300','a:1:{s:6:\"eng-GB\";N;}','a:1:{s:6:\"eng-GB\";s:4:\"Post\";}',2,0,''),(17,0,1,'<author>',1705188587,14,'comment',2,0,2,1705188626,14,'f22101668e08a0b25e4d76e0df3629ce','a:1:{s:6:\"eng-GB\";N;}','a:1:{s:6:\"eng-GB\";s:7:\"Comment\";}',2,0,'');
/*!40000 ALTER TABLE `ezcontentclass` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezcontentclass_attribute`
--

DROP TABLE IF EXISTS `ezcontentclass_attribute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezcontentclass_attribute` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `version` int(11) NOT NULL DEFAULT 0,
  `can_translate` int(11) DEFAULT 1,
  `category` varchar(25) NOT NULL DEFAULT '',
  `contentclass_id` int(11) NOT NULL DEFAULT 0,
  `data_float1` double DEFAULT NULL,
  `data_float2` double DEFAULT NULL,
  `data_float3` double DEFAULT NULL,
  `data_float4` double DEFAULT NULL,
  `data_int1` int(11) DEFAULT NULL,
  `data_int2` int(11) DEFAULT NULL,
  `data_int3` int(11) DEFAULT NULL,
  `data_int4` int(11) DEFAULT NULL,
  `data_text1` varchar(255) DEFAULT NULL,
  `data_text2` varchar(50) DEFAULT NULL,
  `data_text3` varchar(50) DEFAULT NULL,
  `data_text4` varchar(255) DEFAULT NULL,
  `data_text5` longtext DEFAULT NULL,
  `data_type_string` varchar(50) NOT NULL DEFAULT '',
  `identifier` varchar(50) NOT NULL DEFAULT '',
  `is_information_collector` int(11) NOT NULL DEFAULT 0,
  `is_required` int(11) NOT NULL DEFAULT 0,
  `is_searchable` int(11) NOT NULL DEFAULT 0,
  `is_thumbnail` tinyint(1) NOT NULL DEFAULT 0,
  `placement` int(11) NOT NULL DEFAULT 0,
  `serialized_data_text` longtext DEFAULT NULL,
  `serialized_description_list` longtext DEFAULT NULL,
  `serialized_name_list` longtext NOT NULL,
  PRIMARY KEY (`id`,`version`),
  KEY `ezcontentclass_attr_ccid` (`contentclass_id`),
  KEY `ezcontentclass_attr_dts` (`data_type_string`)
) ENGINE=InnoDB AUTO_INCREMENT=205 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezcontentclass_attribute`
--

LOCK TABLES `ezcontentclass_attribute` WRITE;
/*!40000 ALTER TABLE `ezcontentclass_attribute` DISABLE KEYS */;
INSERT INTO `ezcontentclass_attribute` VALUES (1,0,1,'',2,0,0,0,0,255,0,0,0,'New article','','','','','ezstring','title',0,1,1,1,0,NULL,NULL,'a:2:{s:6:\"eng-GB\";s:5:\"Title\";s:16:\"always-available\";s:6:\"eng-GB\";}'),(4,0,1,'',1,NULL,NULL,NULL,NULL,255,0,NULL,NULL,'Folder',NULL,NULL,NULL,NULL,'ezstring','name',0,1,1,0,1,'N;','a:0:{}','a:1:{s:6:\"eng-GB\";s:4:\"Name\";}'),(6,0,1,'',3,0,0,0,0,255,0,0,0,'','','','',NULL,'ezstring','name',0,1,1,0,1,NULL,NULL,'a:2:{s:6:\"eng-GB\";s:4:\"Name\";s:16:\"always-available\";s:6:\"eng-GB\";}'),(7,0,1,'',3,0,0,0,0,255,0,0,0,'','','','',NULL,'ezstring','description',0,0,1,0,2,NULL,NULL,'a:2:{s:6:\"eng-GB\";s:11:\"Description\";s:16:\"always-available\";s:6:\"eng-GB\";}'),(8,0,1,'content',4,NULL,NULL,NULL,NULL,255,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'ezstring','first_name',0,1,1,0,1,'N;','a:1:{s:6:\"eng-GB\";N;}','a:1:{s:6:\"eng-GB\";s:10:\"First name\";}'),(9,0,1,'content',4,NULL,NULL,NULL,NULL,255,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'ezstring','last_name',0,1,1,0,2,'N;','a:1:{s:6:\"eng-GB\";N;}','a:1:{s:6:\"eng-GB\";s:9:\"Last name\";}'),(12,0,0,'content',4,NULL,NULL,NULL,NULL,0,10,0,0,NULL,'^[^@]+$',NULL,NULL,NULL,'ezuser','user_account',0,1,0,0,3,'N;','a:1:{s:6:\"eng-GB\";N;}','a:1:{s:6:\"eng-GB\";s:12:\"User account\";}'),(116,0,1,'',5,0,0,0,0,150,0,0,0,'','','','',NULL,'ezstring','name',0,1,1,0,1,NULL,NULL,'a:2:{s:6:\"eng-GB\";s:4:\"Name\";s:16:\"always-available\";s:6:\"eng-GB\";}'),(117,0,1,'',5,0,0,0,0,10,0,0,0,'','','','',NULL,'ezrichtext','caption',0,0,1,0,2,NULL,NULL,'a:2:{s:6:\"eng-GB\";s:7:\"Caption\";s:16:\"always-available\";s:6:\"eng-GB\";}'),(118,0,1,'',5,0,0,0,0,10,0,0,0,'','','','',NULL,'ezimage','image',0,0,0,1,3,NULL,NULL,'a:2:{s:6:\"eng-GB\";s:5:\"Image\";s:16:\"always-available\";s:6:\"eng-GB\";}'),(119,0,1,'',1,NULL,NULL,NULL,NULL,5,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'ezrichtext','short_description',0,0,1,0,3,'N;','a:0:{}','a:1:{s:6:\"eng-GB\";s:17:\"Short description\";}'),(120,0,1,'',2,0,0,0,0,10,0,0,0,'','','','','','ezrichtext','intro',0,1,1,0,4,NULL,NULL,'a:2:{s:6:\"eng-GB\";s:5:\"Intro\";s:16:\"always-available\";s:6:\"eng-GB\";}'),(121,0,1,'',2,0,0,0,0,20,0,0,0,'','','','','','ezrichtext','body',0,0,1,0,5,NULL,NULL,'a:2:{s:6:\"eng-GB\";s:4:\"Body\";s:16:\"always-available\";s:6:\"eng-GB\";}'),(123,0,0,'',2,0,0,0,0,0,0,0,0,'','','','','','ezboolean','enable_comments',0,0,0,0,6,NULL,NULL,'a:2:{s:6:\"eng-GB\";s:15:\"Enable comments\";s:16:\"always-available\";s:6:\"eng-GB\";}'),(146,0,1,'',12,0,0,0,0,0,0,0,0,'New file','','','',NULL,'ezstring','name',0,1,1,0,1,NULL,NULL,'a:2:{s:6:\"eng-GB\";s:4:\"Name\";s:16:\"always-available\";s:6:\"eng-GB\";}'),(147,0,1,'',12,0,0,0,0,10,0,0,0,'','','','',NULL,'ezrichtext','description',0,0,1,0,2,NULL,NULL,'a:2:{s:6:\"eng-GB\";s:11:\"Description\";s:16:\"always-available\";s:6:\"eng-GB\";}'),(148,0,1,'',12,0,0,0,0,0,0,0,0,'','','','',NULL,'ezbinaryfile','file',0,1,0,0,3,NULL,NULL,'a:2:{s:6:\"eng-GB\";s:4:\"File\";s:16:\"always-available\";s:6:\"eng-GB\";}'),(152,0,1,'',2,0,0,0,0,255,0,0,0,'','','','','','ezstring','short_title',0,0,1,0,2,NULL,NULL,'a:2:{s:6:\"eng-GB\";s:11:\"Short title\";s:16:\"always-available\";s:6:\"eng-GB\";}'),(153,0,1,'',2,0,0,0,0,1,0,0,0,'','','','','','ezauthor','author',0,0,0,0,3,NULL,NULL,'a:2:{s:6:\"eng-GB\";s:6:\"Author\";s:16:\"always-available\";s:6:\"eng-GB\";}'),(154,0,1,'',2,0,0,0,0,0,0,0,0,'','','','','','ezobjectrelation','image',0,0,1,0,7,NULL,NULL,'a:2:{s:6:\"eng-GB\";s:5:\"Image\";s:16:\"always-available\";s:6:\"eng-GB\";}'),(155,0,1,'',1,NULL,NULL,NULL,NULL,100,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'ezstring','short_name',0,0,1,0,2,'N;','a:0:{}','a:1:{s:6:\"eng-GB\";s:10:\"Short name\";}'),(156,0,1,'',1,NULL,NULL,NULL,NULL,20,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'ezrichtext','description',0,0,1,0,4,'N;','a:0:{}','a:1:{s:6:\"eng-GB\";s:11:\"Description\";}'),(179,0,1,'content',4,NULL,NULL,NULL,NULL,10,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'eztext','signature',0,0,1,0,4,'N;','a:1:{s:6:\"eng-GB\";N;}','a:1:{s:6:\"eng-GB\";s:9:\"Signature\";}'),(180,0,1,'content',4,NULL,NULL,NULL,NULL,10,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'ezimage','image',0,0,0,0,5,'N;','a:1:{s:6:\"eng-GB\";N;}','a:1:{s:6:\"eng-GB\";s:5:\"Image\";}'),(181,0,1,'',13,NULL,NULL,NULL,NULL,0,0,NULL,NULL,'New Tag',NULL,NULL,NULL,NULL,'ezstring','name',0,1,1,0,1,'N;','a:1:{s:6:\"eng-GB\";s:0:\"\";}','a:1:{s:6:\"eng-GB\";s:4:\"Name\";}'),(182,0,0,'',13,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'ezstring','identifier',0,1,1,0,2,'N;','a:0:{}','a:1:{s:6:\"eng-GB\";s:10:\"Identifier\";}'),(183,0,0,'',13,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'tags',NULL,NULL,NULL,NULL,'ibexa_taxonomy_entry','parent',0,0,1,0,3,'N;','a:0:{}','a:1:{s:6:\"eng-GB\";s:6:\"Parent\";}'),(184,0,1,'',13,NULL,NULL,NULL,NULL,10,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'eztext','description',0,0,1,0,4,'N;','a:0:{}','a:1:{s:6:\"eng-GB\";s:11:\"Description\";}'),(185,0,1,'',13,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'ezimage','image',0,0,0,0,5,'N;','a:0:{}','a:1:{s:6:\"eng-GB\";s:12:\"Image upload\";}'),(186,0,1,'',14,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'ezstring','name',0,1,1,0,10,'N;','a:0:{}','a:1:{s:6:\"eng-GB\";s:4:\"Name\";}'),(187,0,1,'',14,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'ezstring','identifier',0,1,1,0,20,'N;','a:0:{}','a:1:{s:6:\"eng-GB\";s:10:\"Identifier\";}'),(188,0,1,'',14,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'product_categories',NULL,NULL,NULL,NULL,'ibexa_taxonomy_entry','parent',0,0,1,0,30,'N;','a:0:{}','a:1:{s:6:\"eng-GB\";s:15:\"Parent Category\";}'),(189,0,1,'',14,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'ezrichtext','description',0,0,1,0,40,'N;','a:0:{}','a:1:{s:6:\"eng-GB\";s:11:\"Description\";}'),(190,0,1,'',14,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'ezimageasset','image',0,0,1,0,50,'N;','a:0:{}','a:1:{s:6:\"eng-GB\";s:5:\"Image\";}'),(192,0,1,'content',15,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'ezstring','name',0,1,1,0,0,'N;','a:1:{s:6:\"eng-GB\";N;}','a:1:{s:6:\"eng-GB\";s:4:\"Name\";}'),(193,0,1,'content',15,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'ezstring','color',0,1,1,0,1,'N;','a:1:{s:6:\"eng-GB\";N;}','a:1:{s:6:\"eng-GB\";s:11:\"Color (hex)\";}'),(195,0,1,'content',16,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'ezauthor','author',0,1,1,0,0,'N;','a:1:{s:6:\"eng-GB\";N;}','a:1:{s:6:\"eng-GB\";s:6:\"Author\";}'),(196,0,1,'content',16,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'ezstring','title',0,1,1,0,1,'N;','a:1:{s:6:\"eng-GB\";N;}','a:1:{s:6:\"eng-GB\";s:5:\"Title\";}'),(197,0,1,'content',16,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'ezrichtext','message',0,1,1,0,2,'N;','a:1:{s:6:\"eng-GB\";N;}','a:1:{s:6:\"eng-GB\";s:7:\"Message\";}'),(198,0,1,'content',16,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<related-objects><constraints><allowed-class contentclass-identifier=\"category\"/></constraints><type value=\"2\"/><object_class value=\"\"/><selection_type value=\"0\"/><contentobject-placement node-id=\"62\"/><root_default_location value=\"\"/><selection_limit value=\"3\"/></related-objects>\n','ezobjectrelationlist','categories',0,1,1,0,3,'N;','a:1:{s:6:\"eng-GB\";N;}','a:1:{s:6:\"eng-GB\";s:10:\"Categories\";}'),(202,0,1,'content',17,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'ezauthor','author',0,1,1,0,0,'N;','a:1:{s:6:\"eng-GB\";N;}','a:1:{s:6:\"eng-GB\";s:6:\"Author\";}'),(203,0,1,'content',17,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'ezrichtext','message',0,1,1,0,1,'N;','a:1:{s:6:\"eng-GB\";N;}','a:1:{s:6:\"eng-GB\";s:7:\"Message\";}');
/*!40000 ALTER TABLE `ezcontentclass_attribute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezcontentclass_attribute_ml`
--

DROP TABLE IF EXISTS `ezcontentclass_attribute_ml`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezcontentclass_attribute_ml` (
  `contentclass_attribute_id` int(11) NOT NULL,
  `version` int(11) NOT NULL,
  `language_id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `data_text` text DEFAULT NULL,
  `data_json` text DEFAULT NULL,
  PRIMARY KEY (`contentclass_attribute_id`,`version`,`language_id`),
  KEY `ezcontentclass_attribute_ml_lang_fk` (`language_id`),
  CONSTRAINT `ezcontentclass_attribute_ml_lang_fk` FOREIGN KEY (`language_id`) REFERENCES `ezcontent_language` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezcontentclass_attribute_ml`
--

LOCK TABLES `ezcontentclass_attribute_ml` WRITE;
/*!40000 ALTER TABLE `ezcontentclass_attribute_ml` DISABLE KEYS */;
INSERT INTO `ezcontentclass_attribute_ml` VALUES (8,0,2,'First name',NULL,NULL,NULL),(9,0,2,'Last name',NULL,NULL,NULL),(12,0,2,'User account',NULL,NULL,NULL),(179,0,2,'Signature',NULL,NULL,NULL),(180,0,2,'Image',NULL,NULL,NULL),(181,0,2,'Name','',NULL,NULL),(182,0,2,'Identifier',NULL,NULL,NULL),(183,0,2,'Parent',NULL,NULL,NULL),(184,0,2,'Description',NULL,NULL,NULL),(185,0,2,'Image upload',NULL,NULL,NULL),(186,0,2,'Name',NULL,NULL,NULL),(187,0,2,'Identifier',NULL,NULL,NULL),(188,0,2,'Parent Category',NULL,NULL,NULL),(189,0,2,'Description',NULL,NULL,NULL),(190,0,2,'Image',NULL,NULL,NULL),(192,0,2,'Name',NULL,NULL,NULL),(193,0,2,'Color (hex)',NULL,NULL,NULL),(195,0,2,'Author',NULL,NULL,NULL),(196,0,2,'Title',NULL,NULL,NULL),(197,0,2,'Message',NULL,NULL,NULL),(198,0,2,'Categories',NULL,NULL,NULL),(202,0,2,'Author',NULL,NULL,NULL),(203,0,2,'Message',NULL,NULL,NULL);
/*!40000 ALTER TABLE `ezcontentclass_attribute_ml` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezcontentclass_classgroup`
--

DROP TABLE IF EXISTS `ezcontentclass_classgroup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezcontentclass_classgroup` (
  `contentclass_id` int(11) NOT NULL DEFAULT 0,
  `contentclass_version` int(11) NOT NULL DEFAULT 0,
  `group_id` int(11) NOT NULL DEFAULT 0,
  `group_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`contentclass_id`,`contentclass_version`,`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezcontentclass_classgroup`
--

LOCK TABLES `ezcontentclass_classgroup` WRITE;
/*!40000 ALTER TABLE `ezcontentclass_classgroup` DISABLE KEYS */;
INSERT INTO `ezcontentclass_classgroup` VALUES (1,0,1,'Content'),(2,0,1,'Content'),(3,0,2,'Users'),(4,0,2,'Users'),(5,0,3,'Media'),(12,0,3,'Media'),(13,0,1,'Content'),(14,0,1,'Content'),(15,0,1,'Content'),(16,0,1,'Content'),(17,0,1,'Content');
/*!40000 ALTER TABLE `ezcontentclass_classgroup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezcontentclass_name`
--

DROP TABLE IF EXISTS `ezcontentclass_name`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezcontentclass_name` (
  `contentclass_id` int(11) NOT NULL DEFAULT 0,
  `contentclass_version` int(11) NOT NULL DEFAULT 0,
  `language_id` bigint(20) NOT NULL DEFAULT 0,
  `language_locale` varchar(20) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`contentclass_id`,`contentclass_version`,`language_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezcontentclass_name`
--

LOCK TABLES `ezcontentclass_name` WRITE;
/*!40000 ALTER TABLE `ezcontentclass_name` DISABLE KEYS */;
INSERT INTO `ezcontentclass_name` VALUES (1,0,2,'eng-GB','Folder'),(2,0,3,'eng-GB','Article'),(3,0,3,'eng-GB','User group'),(4,0,2,'eng-GB','User'),(5,0,3,'eng-GB','Image'),(12,0,3,'eng-GB','File'),(13,0,2,'eng-GB','Tag'),(14,0,2,'eng-GB','Product Category'),(15,0,2,'eng-GB','Category'),(16,0,2,'eng-GB','Post'),(17,0,2,'eng-GB','Comment');
/*!40000 ALTER TABLE `ezcontentclass_name` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezcontentclassgroup`
--

DROP TABLE IF EXISTS `ezcontentclassgroup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezcontentclassgroup` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` int(11) NOT NULL DEFAULT 0,
  `creator_id` int(11) NOT NULL DEFAULT 0,
  `modified` int(11) NOT NULL DEFAULT 0,
  `modifier_id` int(11) NOT NULL DEFAULT 0,
  `name` varchar(255) DEFAULT NULL,
  `is_system` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezcontentclassgroup`
--

LOCK TABLES `ezcontentclassgroup` WRITE;
/*!40000 ALTER TABLE `ezcontentclassgroup` DISABLE KEYS */;
INSERT INTO `ezcontentclassgroup` VALUES (1,1031216928,14,1033922106,14,'Content',0),(2,1031216941,14,1033922113,14,'Users',0),(3,1032009743,14,1033922120,14,'Media',0),(4,1705188118,14,1705188118,14,'product',1);
/*!40000 ALTER TABLE `ezcontentclassgroup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezcontentobject`
--

DROP TABLE IF EXISTS `ezcontentobject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezcontentobject` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `contentclass_id` int(11) NOT NULL DEFAULT 0,
  `current_version` int(11) DEFAULT NULL,
  `initial_language_id` bigint(20) NOT NULL DEFAULT 0,
  `language_mask` bigint(20) NOT NULL DEFAULT 0,
  `modified` int(11) NOT NULL DEFAULT 0,
  `name` varchar(255) DEFAULT NULL,
  `owner_id` int(11) NOT NULL DEFAULT 0,
  `published` int(11) NOT NULL DEFAULT 0,
  `remote_id` varchar(100) DEFAULT NULL,
  `section_id` int(11) NOT NULL DEFAULT 0,
  `status` int(11) DEFAULT 0,
  `is_hidden` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ezcontentobject_remote_id` (`remote_id`),
  KEY `ezcontentobject_classid` (`contentclass_id`),
  KEY `ezcontentobject_lmask` (`language_mask`),
  KEY `ezcontentobject_pub` (`published`),
  KEY `ezcontentobject_section` (`section_id`),
  KEY `ezcontentobject_currentversion` (`current_version`),
  KEY `ezcontentobject_owner` (`owner_id`),
  KEY `ezcontentobject_status` (`status`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezcontentobject`
--

LOCK TABLES `ezcontentobject` WRITE;
/*!40000 ALTER TABLE `ezcontentobject` DISABLE KEYS */;
INSERT INTO `ezcontentobject` VALUES (1,1,10,2,3,1705188300,'Poky Bulletin Board',14,1448889046,'9459d3c29e15006e45197295722c7ade',1,1,0),(4,3,1,2,3,1033917596,'Users',14,1033917596,'f5c88a2209584891056f987fd965b0ba',2,1,0),(10,4,2,2,3,1072180405,'Anonymous User',14,1033920665,'faaeb9be3bd98ed09f606fc16d144eca',2,1,0),(11,3,1,2,3,1033920746,'Guest accounts',14,1033920746,'5f7f0bdb3381d6a461d8c29ff53d908f',2,1,0),(12,3,1,2,3,1033920775,'Administrator users',14,1033920775,'9b47a45624b023b1a76c73b74d704acf',2,1,0),(13,3,1,2,3,1033920794,'Editors',14,1033920794,'3c160cca19fb135f83bd02d911f04db2',2,1,0),(14,4,3,2,3,1301062024,'Administrator User',14,1033920830,'1bb4fe25487f05527efa8bfd394cecc7',2,1,0),(41,1,1,2,3,1060695457,'Media',14,1060695457,'a6e35cbcb7cd6ae4b691f3eee30cd262',3,1,0),(42,3,1,2,3,1072180330,'Anonymous Users',14,1072180330,'15b256dbea2ae72418ff5facc999e8f9',2,1,0),(49,1,1,2,3,1080220197,'Images',14,1080220197,'e7ff633c6b8e0fd3531e74c6e712bead',3,1,0),(50,1,1,2,3,1080220220,'Files',14,1080220220,'732a5acd01b51a6fe6eab448ad4138a9',3,1,0),(51,1,1,2,3,1080220233,'Multimedia',14,1080220233,'09082deb98662a104f325aaa8c4933d3',3,1,0),(52,1,1,2,3,1705188118,'Taxonomy',14,1705188118,'56c7e21f85f2661e135aba602c94bd44',4,1,0),(53,1,1,2,3,1705188118,'Tags',14,1705188118,'05464a5a829c47a3727b23c9230bdb0c',4,1,0),(54,13,1,2,3,1705188118,'Root',14,1705188118,'31d4a612522c2a55e278a5b8d1f9a27c',4,1,0),(55,1,1,2,3,1705188118,'Product catalog',14,1705188118,'34836f27b5691d1a7a50b4efaa349161',1,1,0),(56,1,1,2,3,1705188118,'Products Taxonomy',14,1705188118,'694ec47a709b2f1a2d669f2ed469ce82',5,1,0),(57,1,1,2,3,1705188118,'Products Taxonomy',14,1705188118,'85db25200c223cc9c51d9a1396a9c462',5,1,0),(58,14,1,2,3,1705188118,'Product Root Tag',14,1705188118,'59af21ad4dc1a79371afd954ac37a08e',5,1,0),(59,3,1,2,3,1705188214,'Posters',14,1705188214,'0f3125bc5e73f2f4b5550661cab6c5e7',2,1,0),(60,1,1,2,3,1705188320,'Categories',14,1705188320,'8a6a24451346a8ba8fd16cfb989e7acc',1,1,0),(61,1,1,2,3,1705188343,'Posts',14,1705188343,'bcf2e37d43f37902c75d42f8323adb01',1,1,0);
/*!40000 ALTER TABLE `ezcontentobject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezcontentobject_attribute`
--

DROP TABLE IF EXISTS `ezcontentobject_attribute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezcontentobject_attribute` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `version` int(11) NOT NULL DEFAULT 0,
  `attribute_original_id` int(11) DEFAULT 0,
  `contentclassattribute_id` int(11) NOT NULL DEFAULT 0,
  `contentobject_id` int(11) NOT NULL DEFAULT 0,
  `data_float` double DEFAULT NULL,
  `data_int` int(11) DEFAULT NULL,
  `data_text` longtext DEFAULT NULL,
  `data_type_string` varchar(50) DEFAULT '',
  `language_code` varchar(20) NOT NULL DEFAULT '',
  `language_id` bigint(20) NOT NULL DEFAULT 0,
  `sort_key_int` int(11) NOT NULL DEFAULT 0,
  `sort_key_string` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`,`version`),
  KEY `ezcontentobject_attribute_co_id_ver_lang_code` (`contentobject_id`,`version`,`language_code`),
  KEY `ezcontentobject_classattr_id` (`contentclassattribute_id`),
  KEY `sort_key_string` (`sort_key_string`(191)),
  KEY `ezcontentobject_attribute_language_code` (`language_code`),
  KEY `sort_key_int` (`sort_key_int`),
  KEY `ezcontentobject_attribute_co_id_ver` (`contentobject_id`,`version`)
) ENGINE=InnoDB AUTO_INCREMENT=221 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezcontentobject_attribute`
--

LOCK TABLES `ezcontentobject_attribute` WRITE;
/*!40000 ALTER TABLE `ezcontentobject_attribute` DISABLE KEYS */;
INSERT INTO `ezcontentobject_attribute` VALUES (1,9,0,4,1,NULL,NULL,'Ibexa Platform','ezstring','eng-GB',3,0,'ibexa platform'),(1,10,0,4,1,NULL,NULL,'Poky Bulletin Board','ezstring','eng-GB',3,0,'poky bulletin board'),(2,9,0,119,1,NULL,NULL,'<?xml version=\"1.0\" encoding=\"UTF-8\"?><section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:ezxhtml=\"http://ibexa.co/xmlns/dxp/docbook/xhtml\" xmlns:ezcustom=\"http://ibexa.co/xmlns/dxp/docbook/custom\" version=\"5.0-variant ezpublish-1.0\"><para><emphasis role=\"strong\">You are now ready to start your project.</emphasis></para></section>','ezrichtext','eng-GB',3,0,''),(2,10,0,119,1,NULL,NULL,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,''),(7,1,0,7,4,NULL,NULL,'Main group','ezstring','eng-GB',3,0,''),(8,1,0,6,4,NULL,NULL,'Users','ezstring','eng-GB',3,0,''),(19,2,0,8,10,0,0,'Anonymous','ezstring','eng-GB',3,0,'anonymous'),(20,2,0,9,10,0,0,'User','ezstring','eng-GB',3,0,'user'),(21,2,0,12,10,0,0,'','ezuser','eng-GB',3,0,''),(22,1,0,6,11,0,0,'Guest accounts','ezstring','eng-GB',3,0,''),(23,1,0,7,11,0,0,'','ezstring','eng-GB',3,0,''),(24,1,0,6,12,0,0,'Administrator users','ezstring','eng-GB',3,0,''),(25,1,0,7,12,0,0,'','ezstring','eng-GB',3,0,''),(26,1,0,6,13,0,0,'Editors','ezstring','eng-GB',3,0,''),(27,1,0,7,13,0,0,'','ezstring','eng-GB',3,0,''),(28,3,0,8,14,0,0,'Administrator','ezstring','eng-GB',3,0,'administrator'),(29,3,0,9,14,0,0,'User','ezstring','eng-GB',3,0,'user'),(30,3,30,12,14,0,0,'','ezuser','eng-GB',3,0,''),(98,1,0,4,41,0,0,'Media','ezstring','eng-GB',3,0,''),(99,1,0,119,41,0,1045487555,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:ezxhtml=\"http://ibexa.co/xmlns/dxp/docbook/xhtml\" xmlns:ezcustom=\"http://ibexa.co/xmlns/dxp/docbook/custom\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,''),(100,1,0,6,42,0,0,'Anonymous Users','ezstring','eng-GB',3,0,'anonymous users'),(101,1,0,7,42,0,0,'User group for the anonymous user','ezstring','eng-GB',3,0,'user group for the anonymous user'),(102,9,0,155,1,NULL,NULL,'Ibexa Platform','ezstring','eng-GB',3,0,'ibexa platform'),(102,10,0,155,1,NULL,NULL,'Poky Bulletin Board','ezstring','eng-GB',3,0,'poky bulletin board'),(103,1,0,155,41,0,0,'','ezstring','eng-GB',3,0,''),(104,9,0,156,1,NULL,NULL,'<?xml version=\"1.0\" encoding=\"UTF-8\"?><section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:ezxhtml=\"http://ibexa.co/xmlns/dxp/docbook/xhtml\" xmlns:ezcustom=\"http://ibexa.co/xmlns/dxp/docbook/custom\" version=\"5.0-variant ezpublish-1.0\"><para>This is the clean installation coming with Ibexa Platform.</para><para>It\'s a bare-bones setup of the Platform, an excellent foundation to build upon if you want to start your project from scratch.</para></section>','ezrichtext','eng-GB',3,0,''),(104,10,0,156,1,NULL,NULL,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,''),(105,1,0,156,41,0,1045487555,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:ezxhtml=\"http://ibexa.co/xmlns/dxp/docbook/xhtml\" xmlns:ezcustom=\"http://ibexa.co/xmlns/dxp/docbook/custom\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,''),(142,1,0,4,49,0,0,'Images','ezstring','eng-GB',3,0,'images'),(143,1,0,155,49,0,0,'','ezstring','eng-GB',3,0,''),(144,1,0,119,49,0,1045487555,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:ezxhtml=\"http://ibexa.co/xmlns/dxp/docbook/xhtml\" xmlns:ezcustom=\"http://ibexa.co/xmlns/dxp/docbook/custom\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,''),(145,1,0,156,49,0,1045487555,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:ezxhtml=\"http://ibexa.co/xmlns/dxp/docbook/xhtml\" xmlns:ezcustom=\"http://ibexa.co/xmlns/dxp/docbook/custom\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,''),(147,1,0,4,50,0,0,'Files','ezstring','eng-GB',3,0,'files'),(148,1,0,155,50,0,0,'','ezstring','eng-GB',3,0,''),(149,1,0,119,50,0,1045487555,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:ezxhtml=\"http://ibexa.co/xmlns/dxp/docbook/xhtml\" xmlns:ezcustom=\"http://ibexa.co/xmlns/dxp/docbook/custom\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,''),(150,1,0,156,50,0,1045487555,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:ezxhtml=\"http://ibexa.co/xmlns/dxp/docbook/xhtml\" xmlns:ezcustom=\"http://ibexa.co/xmlns/dxp/docbook/custom\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,''),(152,1,0,4,51,0,0,'Multimedia','ezstring','eng-GB',3,0,'multimedia'),(153,1,0,155,51,0,0,'','ezstring','eng-GB',3,0,''),(154,1,0,119,51,0,1045487555,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:ezxhtml=\"http://ibexa.co/xmlns/dxp/docbook/xhtml\" xmlns:ezcustom=\"http://ibexa.co/xmlns/dxp/docbook/custom\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,''),(155,1,0,156,51,0,1045487555,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:ezxhtml=\"http://ibexa.co/xmlns/dxp/docbook/xhtml\" xmlns:ezcustom=\"http://ibexa.co/xmlns/dxp/docbook/custom\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,''),(177,2,0,179,10,0,0,'','eztext','eng-GB',3,0,''),(178,3,0,179,14,0,0,'','eztext','eng-GB',3,0,''),(179,2,0,180,10,0,0,'','ezimage','eng-GB',3,0,''),(180,3,0,180,14,0,0,'<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<ezimage serial_number=\"1\" is_valid=\"\" filename=\"\" suffix=\"\" basename=\"\" dirpath=\"\" url=\"\" original_filename=\"\" mime_type=\"\" width=\"\" height=\"\" alternative_text=\"\" alias_key=\"1293033771\" timestamp=\"1301057722\"><original attribute_id=\"180\" attribute_version=\"3\" attribute_language=\"eng-GB\"/></ezimage>\n','ezimage','eng-GB',3,0,''),(181,1,0,4,52,NULL,NULL,'Taxonomy','ezstring','eng-GB',3,0,'taxonomy'),(182,1,0,155,52,NULL,NULL,NULL,'ezstring','eng-GB',3,0,''),(183,1,0,119,52,NULL,NULL,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,''),(184,1,0,156,52,NULL,NULL,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,''),(185,1,0,4,53,NULL,NULL,'Tags','ezstring','eng-GB',3,0,'tags'),(186,1,0,155,53,NULL,NULL,NULL,'ezstring','eng-GB',3,0,''),(187,1,0,119,53,NULL,NULL,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,''),(188,1,0,156,53,NULL,NULL,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,''),(189,1,0,181,54,NULL,NULL,'Root','ezstring','eng-GB',3,0,'root'),(190,1,0,182,54,NULL,NULL,'root','ezstring','eng-GB',3,0,'root'),(191,1,0,183,54,NULL,NULL,NULL,'ibexa_taxonomy_entry','eng-GB',3,0,''),(192,1,0,184,54,NULL,NULL,NULL,'eztext','eng-GB',3,0,''),(193,1,0,185,54,NULL,NULL,NULL,'ezimage','eng-GB',3,0,''),(194,1,0,4,55,NULL,NULL,'Product catalog','ezstring','eng-GB',3,0,'product catalog'),(195,1,0,155,55,NULL,NULL,NULL,'ezstring','eng-GB',3,0,''),(196,1,0,119,55,NULL,NULL,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,''),(197,1,0,156,55,NULL,NULL,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,''),(198,1,0,4,56,NULL,NULL,'Products Taxonomy','ezstring','eng-GB',3,0,'products taxonomy'),(199,1,0,155,56,NULL,NULL,NULL,'ezstring','eng-GB',3,0,''),(200,1,0,119,56,NULL,NULL,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,''),(201,1,0,156,56,NULL,NULL,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,''),(202,1,0,4,57,NULL,NULL,'Products Taxonomy','ezstring','eng-GB',3,0,'products taxonomy'),(203,1,0,155,57,NULL,NULL,NULL,'ezstring','eng-GB',3,0,''),(204,1,0,119,57,NULL,NULL,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,''),(205,1,0,156,57,NULL,NULL,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,''),(206,1,0,186,58,NULL,NULL,'Product Root Tag','ezstring','eng-GB',3,0,'product root tag'),(207,1,0,187,58,NULL,NULL,'product_root','ezstring','eng-GB',3,0,'product_root'),(208,1,0,188,58,NULL,NULL,NULL,'ibexa_taxonomy_entry','eng-GB',3,0,''),(209,1,0,189,58,NULL,NULL,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,''),(210,1,0,190,58,NULL,NULL,'{\"destinationContentId\":null,\"alternativeText\":null,\"source\":null}','ezimageasset','eng-GB',3,0,''),(211,1,0,6,59,NULL,NULL,'Posters','ezstring','eng-GB',3,0,'posters'),(212,1,0,7,59,NULL,NULL,NULL,'ezstring','eng-GB',3,0,''),(213,1,0,4,60,NULL,NULL,'Categories','ezstring','eng-GB',3,0,'categories'),(214,1,0,155,60,NULL,NULL,'Categories','ezstring','eng-GB',3,0,'categories'),(215,1,0,119,60,NULL,NULL,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,''),(216,1,0,156,60,NULL,NULL,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,''),(217,1,0,4,61,NULL,NULL,'Posts','ezstring','eng-GB',3,0,'posts'),(218,1,0,155,61,NULL,NULL,'Posts','ezstring','eng-GB',3,0,'posts'),(219,1,0,119,61,NULL,NULL,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,''),(220,1,0,156,61,NULL,NULL,'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<section xmlns=\"http://docbook.org/ns/docbook\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"5.0-variant ezpublish-1.0\"/>\n','ezrichtext','eng-GB',3,0,'');
/*!40000 ALTER TABLE `ezcontentobject_attribute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezcontentobject_link`
--

DROP TABLE IF EXISTS `ezcontentobject_link`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezcontentobject_link` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `contentclassattribute_id` int(11) NOT NULL DEFAULT 0,
  `from_contentobject_id` int(11) NOT NULL DEFAULT 0,
  `from_contentobject_version` int(11) NOT NULL DEFAULT 0,
  `relation_type` int(11) NOT NULL DEFAULT 1,
  `to_contentobject_id` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `ezco_link_to_co_id` (`to_contentobject_id`),
  KEY `ezco_link_from` (`from_contentobject_id`,`from_contentobject_version`,`contentclassattribute_id`),
  KEY `ezco_link_cca_id` (`contentclassattribute_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezcontentobject_link`
--

LOCK TABLES `ezcontentobject_link` WRITE;
/*!40000 ALTER TABLE `ezcontentobject_link` DISABLE KEYS */;
/*!40000 ALTER TABLE `ezcontentobject_link` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezcontentobject_name`
--

DROP TABLE IF EXISTS `ezcontentobject_name`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezcontentobject_name` (
  `contentobject_id` int(11) NOT NULL DEFAULT 0,
  `content_version` int(11) NOT NULL DEFAULT 0,
  `content_translation` varchar(20) NOT NULL DEFAULT '',
  `language_id` bigint(20) NOT NULL DEFAULT 0,
  `name` varchar(255) DEFAULT NULL,
  `real_translation` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`contentobject_id`,`content_version`,`content_translation`),
  KEY `ezcontentobject_name_lang_id` (`language_id`),
  KEY `ezcontentobject_name_cov_id` (`content_version`),
  KEY `ezcontentobject_name_name` (`name`(191))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezcontentobject_name`
--

LOCK TABLES `ezcontentobject_name` WRITE;
/*!40000 ALTER TABLE `ezcontentobject_name` DISABLE KEYS */;
INSERT INTO `ezcontentobject_name` VALUES (1,9,'eng-GB',2,'Ibexa Platform','eng-GB'),(1,10,'eng-GB',3,'Poky Bulletin Board','eng-GB'),(4,1,'eng-GB',3,'Users','eng-GB'),(10,2,'eng-GB',3,'Anonymous User','eng-GB'),(11,1,'eng-GB',3,'Guest accounts','eng-GB'),(12,1,'eng-GB',3,'Administrator users','eng-GB'),(13,1,'eng-GB',3,'Editors','eng-GB'),(14,3,'eng-GB',3,'Administrator User','eng-GB'),(41,1,'eng-GB',3,'Media','eng-GB'),(42,1,'eng-GB',3,'Anonymous Users','eng-GB'),(49,1,'eng-GB',3,'Images','eng-GB'),(50,1,'eng-GB',3,'Files','eng-GB'),(51,1,'eng-GB',3,'Multimedia','eng-GB'),(52,1,'eng-GB',3,'Taxonomy','eng-GB'),(53,1,'eng-GB',3,'Tags','eng-GB'),(54,1,'eng-GB',3,'Root','eng-GB'),(55,1,'eng-GB',3,'Product catalog','eng-GB'),(56,1,'eng-GB',3,'Products Taxonomy','eng-GB'),(57,1,'eng-GB',3,'Products Taxonomy','eng-GB'),(58,1,'eng-GB',3,'Product Root Tag','eng-GB'),(59,1,'eng-GB',3,'Posters','eng-GB'),(60,1,'eng-GB',3,'Categories','eng-GB'),(61,1,'eng-GB',3,'Posts','eng-GB');
/*!40000 ALTER TABLE `ezcontentobject_name` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezcontentobject_trash`
--

DROP TABLE IF EXISTS `ezcontentobject_trash`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezcontentobject_trash` (
  `node_id` int(11) NOT NULL DEFAULT 0,
  `contentobject_id` int(11) DEFAULT NULL,
  `contentobject_version` int(11) DEFAULT NULL,
  `depth` int(11) NOT NULL DEFAULT 0,
  `is_hidden` int(11) NOT NULL DEFAULT 0,
  `is_invisible` int(11) NOT NULL DEFAULT 0,
  `main_node_id` int(11) DEFAULT NULL,
  `modified_subnode` int(11) DEFAULT 0,
  `parent_node_id` int(11) NOT NULL DEFAULT 0,
  `path_identification_string` longtext DEFAULT NULL,
  `path_string` varchar(255) NOT NULL DEFAULT '',
  `priority` int(11) NOT NULL DEFAULT 0,
  `remote_id` varchar(100) NOT NULL DEFAULT '',
  `sort_field` int(11) DEFAULT 1,
  `sort_order` int(11) DEFAULT 1,
  `trashed` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`node_id`),
  KEY `ezcobj_trash_depth` (`depth`),
  KEY `ezcobj_trash_p_node_id` (`parent_node_id`),
  KEY `ezcobj_trash_path_ident` (`path_identification_string`(50)),
  KEY `ezcobj_trash_co_id` (`contentobject_id`),
  KEY `ezcobj_trash_modified_subnode` (`modified_subnode`),
  KEY `ezcobj_trash_path` (`path_string`(191))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezcontentobject_trash`
--

LOCK TABLES `ezcontentobject_trash` WRITE;
/*!40000 ALTER TABLE `ezcontentobject_trash` DISABLE KEYS */;
/*!40000 ALTER TABLE `ezcontentobject_trash` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezcontentobject_tree`
--

DROP TABLE IF EXISTS `ezcontentobject_tree`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezcontentobject_tree` (
  `node_id` int(11) NOT NULL AUTO_INCREMENT,
  `contentobject_id` int(11) DEFAULT NULL,
  `contentobject_is_published` int(11) DEFAULT NULL,
  `contentobject_version` int(11) DEFAULT NULL,
  `depth` int(11) NOT NULL DEFAULT 0,
  `is_hidden` int(11) NOT NULL DEFAULT 0,
  `is_invisible` int(11) NOT NULL DEFAULT 0,
  `main_node_id` int(11) DEFAULT NULL,
  `modified_subnode` int(11) DEFAULT 0,
  `parent_node_id` int(11) NOT NULL DEFAULT 0,
  `path_identification_string` longtext DEFAULT NULL,
  `path_string` varchar(255) NOT NULL DEFAULT '',
  `priority` int(11) NOT NULL DEFAULT 0,
  `remote_id` varchar(100) NOT NULL DEFAULT '',
  `sort_field` int(11) DEFAULT 1,
  `sort_order` int(11) DEFAULT 1,
  PRIMARY KEY (`node_id`),
  KEY `ezcontentobject_tree_p_node_id` (`parent_node_id`),
  KEY `ezcontentobject_tree_path_ident` (`path_identification_string`(50)),
  KEY `ezcontentobject_tree_contentobject_id_path_string` (`path_string`(191),`contentobject_id`),
  KEY `ezcontentobject_tree_co_id` (`contentobject_id`),
  KEY `ezcontentobject_tree_depth` (`depth`),
  KEY `ezcontentobject_tree_path` (`path_string`(191)),
  KEY `modified_subnode` (`modified_subnode`),
  KEY `ezcontentobject_tree_remote_id` (`remote_id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezcontentobject_tree`
--

LOCK TABLES `ezcontentobject_tree` WRITE;
/*!40000 ALTER TABLE `ezcontentobject_tree` DISABLE KEYS */;
INSERT INTO `ezcontentobject_tree` VALUES (1,0,1,1,0,0,0,1,1448999778,1,'','/1/',0,'629709ba256fe317c3ddcee35453a96a',1,1),(2,1,1,10,1,0,0,2,1301073466,1,'node_2','/1/2/',0,'f3e90596361e31d496d4026eb624c983',8,1),(5,4,1,1,1,0,0,5,1301062024,1,'users','/1/5/',0,'3f6d92f8044aed134f32153517850f5a',1,1),(12,11,1,1,2,0,0,12,1081860719,5,'users/guest_accounts','/1/5/12/',0,'602dcf84765e56b7f999eaafd3821dd3',1,1),(13,12,1,1,2,0,0,13,1301062024,5,'users/administrator_users','/1/5/13/',0,'769380b7aa94541679167eab817ca893',1,1),(14,13,1,1,2,0,0,14,1081860719,5,'users/editors','/1/5/14/',0,'f7dda2854fc68f7c8455d9cb14bd04a9',1,1),(15,14,1,3,3,0,0,15,1301062024,13,'users/administrator_users/administrator_user','/1/5/13/15/',0,'e5161a99f733200b9ed4e80f9c16187b',1,1),(43,41,1,1,1,0,0,43,1081860720,1,'media','/1/43/',0,'75c715a51699d2d309a924eca6a95145',9,1),(44,42,1,1,2,0,0,44,1081860719,5,'users/anonymous_users','/1/5/44/',0,'4fdf0072da953bb276c0c7e0141c5c9b',9,1),(45,10,1,2,3,0,0,45,1081860719,44,'users/anonymous_users/anonymous_user','/1/5/44/45/',0,'2cf8343bee7b482bab82b269d8fecd76',9,1),(51,49,1,1,2,0,0,51,1081860720,43,'media/images','/1/43/51/',0,'1b26c0454b09bb49dfb1b9190ffd67cb',9,1),(52,50,1,1,2,0,0,52,1081860720,43,'media/files','/1/43/52/',0,'0b113a208f7890f9ad3c24444ff5988c',9,1),(53,51,1,1,2,0,0,53,1081860720,43,'media/multimedia','/1/43/53/',0,'4f18b82c75f10aad476cae5adf98c11f',9,1),(54,52,1,1,1,0,0,54,1705188118,1,'taxonomy','/1/54/',0,'750b731a4e154cc432f0d69f6c45955d',9,1),(55,53,1,1,2,0,0,55,1705188118,54,'taxonomy/tags','/1/54/55/',0,'taxonomy_tags_folder',9,1),(56,54,1,1,3,0,0,56,1705188118,55,'taxonomy/tags/root','/1/54/55/56/',0,'taxonomy_tags_root',9,1),(57,55,1,1,1,0,0,57,1705188118,1,'product_catalog','/1/57/',0,'ibexa_product_catalog_root',9,1),(58,56,1,1,1,0,0,58,1705188118,1,'products_taxonomy','/1/58/',0,'product_category_taxonomy_folder',1,1),(59,57,1,1,2,0,0,59,1705188118,58,'products_taxonomy/products_taxonomy','/1/58/59/',0,'product_category_taxonomy_folder_root',1,1),(60,58,1,1,3,0,0,60,1705188118,59,'products_taxonomy/products_taxonomy/product_root_tag','/1/58/59/60/',0,'product_category_taxonomy_tag_root',2,0),(61,59,1,1,2,0,0,61,1705188214,5,'users/posters','/1/5/61/',0,'f0ba3bce6ae8538a2ad354fdc08efbb5',1,1),(62,60,1,1,2,0,0,62,1705188320,2,'node_2/categories','/1/2/62/',0,'41a2566f02f50c29cbfc954221631072',1,1),(63,61,1,1,2,0,0,63,1705188343,2,'node_2/posts','/1/2/63/',0,'946d02946130ec89f70d42ee67af45af',1,1);
/*!40000 ALTER TABLE `ezcontentobject_tree` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezcontentobject_version`
--

DROP TABLE IF EXISTS `ezcontentobject_version`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezcontentobject_version` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `contentobject_id` int(11) DEFAULT NULL,
  `created` int(11) NOT NULL DEFAULT 0,
  `creator_id` int(11) NOT NULL DEFAULT 0,
  `initial_language_id` bigint(20) NOT NULL DEFAULT 0,
  `language_mask` bigint(20) NOT NULL DEFAULT 0,
  `modified` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 0,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `version` int(11) NOT NULL DEFAULT 0,
  `workflow_event_pos` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `ezcobj_version_status` (`status`),
  KEY `idx_object_version_objver` (`contentobject_id`,`version`),
  KEY `ezcontobj_version_obj_status` (`contentobject_id`,`status`),
  KEY `ezcobj_version_creator_id` (`creator_id`)
) ENGINE=InnoDB AUTO_INCREMENT=518 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezcontentobject_version`
--

LOCK TABLES `ezcontentobject_version` WRITE;
/*!40000 ALTER TABLE `ezcontentobject_version` DISABLE KEYS */;
INSERT INTO `ezcontentobject_version` VALUES (4,4,0,14,2,3,0,1,0,1,1),(439,11,1033920737,14,2,3,1033920746,1,0,1,0),(440,12,1033920760,14,2,3,1033920775,1,0,1,0),(441,13,1033920786,14,2,3,1033920794,1,0,1,0),(472,41,1060695450,14,2,3,1060695457,1,0,1,0),(473,42,1072180278,14,2,3,1072180330,1,0,1,0),(474,10,1072180337,14,2,3,1072180405,1,0,2,0),(488,49,1080220181,14,2,3,1080220197,1,0,1,0),(489,50,1080220211,14,2,3,1080220220,1,0,1,0),(490,51,1080220225,14,2,3,1080220233,1,0,1,0),(499,14,1301061783,14,2,3,1301062024,1,0,3,0),(506,1,1448889045,14,2,3,1705188300,3,0,9,0),(507,52,1705188117,14,2,3,1705188118,1,0,1,0),(508,53,1705188118,14,2,3,1705188118,1,0,1,0),(509,54,1705188118,14,2,3,1705188118,1,0,1,0),(510,55,1705188118,14,2,3,1705188118,1,0,1,0),(511,56,1705188118,14,2,3,1705188118,1,0,1,0),(512,57,1705188118,14,2,3,1705188118,1,0,1,0),(513,58,1705188118,14,2,3,1705188118,1,0,1,0),(514,59,1705188205,14,2,3,1705188214,1,0,1,0),(515,1,1705188263,14,2,3,1705188300,1,0,10,0),(516,60,1705188312,14,2,3,1705188320,1,0,1,0),(517,61,1705188335,14,2,3,1705188343,1,0,1,0);
/*!40000 ALTER TABLE `ezcontentobject_version` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezdatebasedpublisher_scheduled_entries`
--

DROP TABLE IF EXISTS `ezdatebasedpublisher_scheduled_entries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezdatebasedpublisher_scheduled_entries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content_id` int(11) NOT NULL,
  `version_id` int(11) DEFAULT NULL,
  `version_number` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `action_timestamp` int(11) NOT NULL,
  `action` varchar(32) NOT NULL,
  `url_root` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `content_id_version_number_action` (`content_id`,`version_number`,`action`),
  KEY `content_id` (`content_id`),
  KEY `version_id` (`version_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezdatebasedpublisher_scheduled_entries`
--

LOCK TABLES `ezdatebasedpublisher_scheduled_entries` WRITE;
/*!40000 ALTER TABLE `ezdatebasedpublisher_scheduled_entries` DISABLE KEYS */;
/*!40000 ALTER TABLE `ezdatebasedpublisher_scheduled_entries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezdfsfile`
--

DROP TABLE IF EXISTS `ezdfsfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezdfsfile` (
  `name_hash` varchar(34) NOT NULL DEFAULT '',
  `name` text NOT NULL,
  `name_trunk` text NOT NULL,
  `datatype` varchar(255) NOT NULL DEFAULT 'application/octet-stream',
  `scope` varchar(25) NOT NULL DEFAULT '',
  `size` bigint(20) unsigned NOT NULL DEFAULT 0,
  `mtime` int(11) NOT NULL DEFAULT 0,
  `expired` tinyint(1) NOT NULL DEFAULT 0,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`name_hash`),
  KEY `ezdfsfile_name_trunk` (`name_trunk`(191)),
  KEY `ezdfsfile_expired_name` (`expired`,`name`(191)),
  KEY `ezdfsfile_name` (`name`(191)),
  KEY `ezdfsfile_mtime` (`mtime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezdfsfile`
--

LOCK TABLES `ezdfsfile` WRITE;
/*!40000 ALTER TABLE `ezdfsfile` DISABLE KEYS */;
/*!40000 ALTER TABLE `ezdfsfile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezeditorialworkflow_markings`
--

DROP TABLE IF EXISTS `ezeditorialworkflow_markings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezeditorialworkflow_markings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `workflow_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `message` text NOT NULL,
  `reviewer_id` int(11) DEFAULT NULL,
  `result` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_workflow_id_markings` (`workflow_id`),
  CONSTRAINT `fk_ezeditorialworkflow_markings_workflow_id` FOREIGN KEY (`workflow_id`) REFERENCES `ezeditorialworkflow_workflows` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezeditorialworkflow_markings`
--

LOCK TABLES `ezeditorialworkflow_markings` WRITE;
/*!40000 ALTER TABLE `ezeditorialworkflow_markings` DISABLE KEYS */;
INSERT INTO `ezeditorialworkflow_markings` VALUES (1,1,'draft','',NULL,'[]'),(2,2,'draft','',NULL,'[]'),(3,3,'draft','',NULL,'[]'),(4,4,'draft','',NULL,'[]'),(5,5,'draft','',NULL,'[]'),(6,6,'draft','',NULL,'[]'),(7,7,'draft','',NULL,'[]'),(8,8,'draft','',NULL,'[]'),(9,9,'draft','',NULL,'[]'),(10,10,'draft','',NULL,'[]');
/*!40000 ALTER TABLE `ezeditorialworkflow_markings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezeditorialworkflow_transitions`
--

DROP TABLE IF EXISTS `ezeditorialworkflow_transitions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezeditorialworkflow_transitions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `workflow_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `timestamp` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_workflow_id_transitions` (`workflow_id`),
  CONSTRAINT `fk_ezeditorialworkflow_transitions_workflow_id` FOREIGN KEY (`workflow_id`) REFERENCES `ezeditorialworkflow_workflows` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezeditorialworkflow_transitions`
--

LOCK TABLES `ezeditorialworkflow_transitions` WRITE;
/*!40000 ALTER TABLE `ezeditorialworkflow_transitions` DISABLE KEYS */;
/*!40000 ALTER TABLE `ezeditorialworkflow_transitions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezeditorialworkflow_workflows`
--

DROP TABLE IF EXISTS `ezeditorialworkflow_workflows`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezeditorialworkflow_workflows` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content_id` int(11) NOT NULL,
  `version_no` int(11) NOT NULL,
  `workflow_name` varchar(255) NOT NULL DEFAULT '',
  `initial_owner_id` int(11) DEFAULT NULL,
  `start_date` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_workflow_id` (`id`),
  KEY `idx_workflow_co_id_ver` (`content_id`,`version_no`),
  KEY `idx_workflow_name` (`workflow_name`),
  KEY `initial_owner_id` (`initial_owner_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezeditorialworkflow_workflows`
--

LOCK TABLES `ezeditorialworkflow_workflows` WRITE;
/*!40000 ALTER TABLE `ezeditorialworkflow_workflows` DISABLE KEYS */;
INSERT INTO `ezeditorialworkflow_workflows` VALUES (1,52,1,'quick_review',14,1705188118),(2,53,1,'quick_review',14,1705188118),(3,54,1,'quick_review',14,1705188118),(4,55,1,'quick_review',14,1705188118),(5,56,1,'quick_review',14,1705188118),(6,57,1,'quick_review',14,1705188118),(7,58,1,'quick_review',14,1705188118),(8,59,1,'quick_review',14,1705188205),(9,60,1,'quick_review',14,1705188312),(10,61,1,'quick_review',14,1705188335);
/*!40000 ALTER TABLE `ezeditorialworkflow_workflows` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezgmaplocation`
--

DROP TABLE IF EXISTS `ezgmaplocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezgmaplocation` (
  `contentobject_attribute_id` int(11) NOT NULL DEFAULT 0,
  `contentobject_version` int(11) NOT NULL DEFAULT 0,
  `latitude` double NOT NULL DEFAULT 0,
  `longitude` double NOT NULL DEFAULT 0,
  `address` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`contentobject_attribute_id`,`contentobject_version`),
  KEY `latitude_longitude_key` (`latitude`,`longitude`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezgmaplocation`
--

LOCK TABLES `ezgmaplocation` WRITE;
/*!40000 ALTER TABLE `ezgmaplocation` DISABLE KEYS */;
/*!40000 ALTER TABLE `ezgmaplocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezimagefile`
--

DROP TABLE IF EXISTS `ezimagefile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezimagefile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `contentobject_attribute_id` int(11) NOT NULL DEFAULT 0,
  `filepath` longtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ezimagefile_file` (`filepath`(191)),
  KEY `ezimagefile_coid` (`contentobject_attribute_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezimagefile`
--

LOCK TABLES `ezimagefile` WRITE;
/*!40000 ALTER TABLE `ezimagefile` DISABLE KEYS */;
/*!40000 ALTER TABLE `ezimagefile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezkeyword`
--

DROP TABLE IF EXISTS `ezkeyword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezkeyword` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `class_id` int(11) NOT NULL DEFAULT 0,
  `keyword` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ezkeyword_keyword` (`keyword`(191))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezkeyword`
--

LOCK TABLES `ezkeyword` WRITE;
/*!40000 ALTER TABLE `ezkeyword` DISABLE KEYS */;
/*!40000 ALTER TABLE `ezkeyword` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezkeyword_attribute_link`
--

DROP TABLE IF EXISTS `ezkeyword_attribute_link`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezkeyword_attribute_link` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `keyword_id` int(11) NOT NULL DEFAULT 0,
  `objectattribute_id` int(11) NOT NULL DEFAULT 0,
  `version` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `ezkeyword_attr_link_oaid` (`objectattribute_id`),
  KEY `ezkeyword_attr_link_kid_oaid` (`keyword_id`,`objectattribute_id`),
  KEY `ezkeyword_attr_link_oaid_ver` (`objectattribute_id`,`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezkeyword_attribute_link`
--

LOCK TABLES `ezkeyword_attribute_link` WRITE;
/*!40000 ALTER TABLE `ezkeyword_attribute_link` DISABLE KEYS */;
/*!40000 ALTER TABLE `ezkeyword_attribute_link` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezmedia`
--

DROP TABLE IF EXISTS `ezmedia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezmedia` (
  `contentobject_attribute_id` int(11) NOT NULL DEFAULT 0,
  `version` int(11) NOT NULL DEFAULT 0,
  `controls` varchar(50) DEFAULT NULL,
  `filename` varchar(255) NOT NULL DEFAULT '',
  `has_controller` int(11) DEFAULT 0,
  `height` int(11) DEFAULT NULL,
  `is_autoplay` int(11) DEFAULT 0,
  `is_loop` int(11) DEFAULT 0,
  `mime_type` varchar(50) NOT NULL DEFAULT '',
  `original_filename` varchar(255) NOT NULL DEFAULT '',
  `pluginspage` varchar(255) DEFAULT NULL,
  `quality` varchar(50) DEFAULT NULL,
  `width` int(11) DEFAULT NULL,
  PRIMARY KEY (`contentobject_attribute_id`,`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezmedia`
--

LOCK TABLES `ezmedia` WRITE;
/*!40000 ALTER TABLE `ezmedia` DISABLE KEYS */;
/*!40000 ALTER TABLE `ezmedia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eznode_assignment`
--

DROP TABLE IF EXISTS `eznode_assignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `eznode_assignment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `contentobject_id` int(11) DEFAULT NULL,
  `contentobject_version` int(11) DEFAULT NULL,
  `from_node_id` int(11) DEFAULT 0,
  `is_main` int(11) NOT NULL DEFAULT 0,
  `op_code` int(11) NOT NULL DEFAULT 0,
  `parent_node` int(11) DEFAULT NULL,
  `parent_remote_id` varchar(100) NOT NULL DEFAULT '',
  `remote_id` varchar(100) NOT NULL DEFAULT '0',
  `sort_field` int(11) DEFAULT 1,
  `sort_order` int(11) DEFAULT 1,
  `priority` int(11) NOT NULL DEFAULT 0,
  `is_hidden` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `eznode_assignment_is_main` (`is_main`),
  KEY `eznode_assignment_coid_cov` (`contentobject_id`,`contentobject_version`),
  KEY `eznode_assignment_parent_node` (`parent_node`),
  KEY `eznode_assignment_co_version` (`contentobject_version`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eznode_assignment`
--

LOCK TABLES `eznode_assignment` WRITE;
/*!40000 ALTER TABLE `eznode_assignment` DISABLE KEYS */;
INSERT INTO `eznode_assignment` VALUES (4,8,2,0,1,2,5,'','0',1,1,0,0),(5,42,1,0,1,2,5,'','0',9,1,0,0),(6,10,2,-1,1,2,44,'','0',9,1,0,0),(7,4,1,0,1,2,1,'','0',1,1,0,0),(8,12,1,0,1,2,5,'','0',1,1,0,0),(9,13,1,0,1,2,5,'','0',1,1,0,0),(11,41,1,0,1,2,1,'','0',1,1,0,0),(12,11,1,0,1,2,5,'','0',1,1,0,0),(27,49,1,0,1,2,43,'','0',9,1,0,0),(28,50,1,0,1,2,43,'','0',9,1,0,0),(29,51,1,0,1,2,43,'','0',9,1,0,0),(38,14,3,-1,1,2,13,'','0',1,1,0,0),(39,52,1,0,1,2,1,'750b731a4e154cc432f0d69f6c45955d','0',9,1,0,0),(40,53,1,0,1,2,54,'taxonomy_tags_folder','0',9,1,0,0),(41,54,1,0,1,2,55,'taxonomy_tags_root','0',9,1,0,0),(42,55,1,0,1,2,1,'ibexa_product_catalog_root','0',9,1,0,0),(43,56,1,0,1,2,1,'product_category_taxonomy_folder','0',1,1,0,0),(44,57,1,0,1,2,58,'product_category_taxonomy_folder_root','0',1,1,0,0),(45,58,1,0,1,2,59,'product_category_taxonomy_tag_root','0',2,0,0,0),(46,59,1,0,1,2,5,'f0ba3bce6ae8538a2ad354fdc08efbb5','0',1,1,0,0),(47,60,1,0,1,2,2,'41a2566f02f50c29cbfc954221631072','0',1,1,0,0),(48,61,1,0,1,2,2,'946d02946130ec89f70d42ee67af45af','0',1,1,0,0);
/*!40000 ALTER TABLE `eznode_assignment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eznotification`
--

DROP TABLE IF EXISTS `eznotification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `eznotification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner_id` int(11) NOT NULL DEFAULT 0,
  `is_pending` tinyint(1) NOT NULL DEFAULT 1,
  `type` varchar(128) NOT NULL DEFAULT '',
  `created` int(11) NOT NULL DEFAULT 0,
  `data` longtext DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `eznotification_owner_is_pending` (`owner_id`,`is_pending`),
  KEY `eznotification_owner` (`owner_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eznotification`
--

LOCK TABLES `eznotification` WRITE;
/*!40000 ALTER TABLE `eznotification` DISABLE KEYS */;
/*!40000 ALTER TABLE `eznotification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezpackage`
--

DROP TABLE IF EXISTS `ezpackage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezpackage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `install_date` int(11) NOT NULL DEFAULT 0,
  `name` varchar(100) NOT NULL DEFAULT '',
  `version` varchar(30) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezpackage`
--

LOCK TABLES `ezpackage` WRITE;
/*!40000 ALTER TABLE `ezpackage` DISABLE KEYS */;
/*!40000 ALTER TABLE `ezpackage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezpolicy`
--

DROP TABLE IF EXISTS `ezpolicy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezpolicy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `function_name` varchar(255) DEFAULT NULL,
  `module_name` varchar(255) DEFAULT NULL,
  `original_id` int(11) NOT NULL DEFAULT 0,
  `role_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ezpolicy_role_id` (`role_id`),
  KEY `ezpolicy_original_id` (`original_id`)
) ENGINE=InnoDB AUTO_INCREMENT=391 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezpolicy`
--

LOCK TABLES `ezpolicy` WRITE;
/*!40000 ALTER TABLE `ezpolicy` DISABLE KEYS */;
INSERT INTO `ezpolicy` VALUES (332,'*','*',0,2),(353,'read','content',0,1),(354,'login','user',0,1),(355,'view_embed','content',0,1),(356,'read','content',0,1),(357,'read','taxonomy',0,1),(358,'read','content',0,1),(359,'read','taxonomy',0,1),(360,'read','content',0,4),(361,'read','content',0,4),(362,'read','taxonomy',0,4),(363,'read','content',0,4),(364,'read','taxonomy',0,4),(365,'*','content',0,3),(366,'login','user',0,3),(367,'*','url',0,3),(368,'all_functions','taxonomy',0,3),(369,'all_functions','taxonomy',0,3),(385,'read','content',0,11),(386,'create','content',0,11),(387,'view_embed','content',0,11),(388,'publish','content',0,11),(389,'versionread','content',0,11),(390,'login','user',0,11);
/*!40000 ALTER TABLE `ezpolicy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezpolicy_limitation`
--

DROP TABLE IF EXISTS `ezpolicy_limitation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezpolicy_limitation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(255) NOT NULL DEFAULT '',
  `policy_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `policy_id` (`policy_id`)
) ENGINE=InnoDB AUTO_INCREMENT=293 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezpolicy_limitation`
--

LOCK TABLES `ezpolicy_limitation` WRITE;
/*!40000 ALTER TABLE `ezpolicy_limitation` DISABLE KEYS */;
INSERT INTO `ezpolicy_limitation` VALUES (252,'Section',329),(266,'Section',353),(267,'SiteAccess',354),(268,'Class',355),(269,'Section',356),(270,'Taxonomy',357),(271,'Section',358),(272,'Taxonomy',359),(273,'Class',360),(274,'Owner',360),(275,'Section',361),(276,'Taxonomy',362),(277,'Section',363),(278,'Taxonomy',364),(289,'Class',386),(290,'Subtree',386),(291,'Owner',388),(292,'SiteAccess',390);
/*!40000 ALTER TABLE `ezpolicy_limitation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezpolicy_limitation_value`
--

DROP TABLE IF EXISTS `ezpolicy_limitation_value`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezpolicy_limitation_value` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `limitation_id` int(11) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ezpolicy_limit_value_limit_id` (`limitation_id`),
  KEY `ezpolicy_limitation_value_val` (`value`(191))
) ENGINE=InnoDB AUTO_INCREMENT=527 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezpolicy_limitation_value`
--

LOCK TABLES `ezpolicy_limitation_value` WRITE;
/*!40000 ALTER TABLE `ezpolicy_limitation_value` DISABLE KEYS */;
INSERT INTO `ezpolicy_limitation_value` VALUES (478,252,'1'),(494,266,'1'),(495,267,'1766001124'),(496,268,'5'),(497,268,'12'),(498,269,'4'),(499,270,'tags'),(500,271,'5'),(501,272,'product_categories'),(502,273,'4'),(503,274,'1'),(504,275,'4'),(505,276,'tags'),(506,277,'5'),(507,278,'product_categories'),(522,289,'17'),(523,289,'16'),(524,290,'/1/2/63/'),(525,291,'1'),(526,292,'1766001124');
/*!40000 ALTER TABLE `ezpolicy_limitation_value` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezpreferences`
--

DROP TABLE IF EXISTS `ezpreferences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezpreferences` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `value` longtext DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ezpreferences_user_id_idx` (`user_id`,`name`),
  KEY `ezpreferences_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezpreferences`
--

LOCK TABLES `ezpreferences` WRITE;
/*!40000 ALTER TABLE `ezpreferences` DISABLE KEYS */;
/*!40000 ALTER TABLE `ezpreferences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezrole`
--

DROP TABLE IF EXISTS `ezrole`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezrole` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `is_new` int(11) NOT NULL DEFAULT 0,
  `name` varchar(255) NOT NULL DEFAULT '',
  `value` char(1) DEFAULT NULL,
  `version` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezrole`
--

LOCK TABLES `ezrole` WRITE;
/*!40000 ALTER TABLE `ezrole` DISABLE KEYS */;
INSERT INTO `ezrole` VALUES (1,0,'Anonymous','0',0),(2,0,'Administrator','0',0),(3,0,'Editor','0',0),(4,0,'Member','0',0),(11,0,'Poster','0',0);
/*!40000 ALTER TABLE `ezrole` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezsearch_object_word_link`
--

DROP TABLE IF EXISTS `ezsearch_object_word_link`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezsearch_object_word_link` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `contentclass_attribute_id` int(11) NOT NULL DEFAULT 0,
  `contentclass_id` int(11) NOT NULL DEFAULT 0,
  `contentobject_id` int(11) NOT NULL DEFAULT 0,
  `frequency` double NOT NULL DEFAULT 0,
  `identifier` varchar(255) NOT NULL DEFAULT '',
  `integer_value` int(11) NOT NULL DEFAULT 0,
  `next_word_id` int(11) NOT NULL DEFAULT 0,
  `placement` int(11) NOT NULL DEFAULT 0,
  `prev_word_id` int(11) NOT NULL DEFAULT 0,
  `published` int(11) NOT NULL DEFAULT 0,
  `section_id` int(11) NOT NULL DEFAULT 0,
  `word_id` int(11) NOT NULL DEFAULT 0,
  `language_mask` bigint(20) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `ezsearch_object_word_link_object` (`contentobject_id`),
  KEY `ezsearch_object_word_link_identifier` (`identifier`(191)),
  KEY `ezsearch_object_word_link_integer_value` (`integer_value`),
  KEY `ezsearch_object_word_link_word` (`word_id`),
  KEY `ezsearch_object_word_link_frequency` (`frequency`)
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezsearch_object_word_link`
--

LOCK TABLES `ezsearch_object_word_link` WRITE;
/*!40000 ALTER TABLE `ezsearch_object_word_link` DISABLE KEYS */;
INSERT INTO `ezsearch_object_word_link` VALUES (60,7,3,4,0,'description',0,43,0,0,1033917596,2,42,3),(61,7,3,4,0,'description',0,44,1,42,1033917596,2,43,3),(62,6,3,4,0,'name',0,0,2,43,1033917596,2,44,3),(63,8,4,10,0,'first_name',0,46,0,0,1033920665,2,45,3),(64,9,4,10,0,'last_name',0,0,1,45,1033920665,2,46,3),(65,6,3,11,0,'name',0,48,0,0,1033920746,2,47,3),(66,6,3,11,0,'name',0,0,1,47,1033920746,2,48,3),(67,6,3,12,0,'name',0,44,0,0,1033920775,2,49,3),(68,6,3,12,0,'name',0,0,1,49,1033920775,2,44,3),(69,6,3,13,0,'name',0,0,0,0,1033920794,2,50,3),(70,8,4,14,0,'first_name',0,46,0,0,1033920830,2,49,3),(71,9,4,14,0,'last_name',0,0,1,49,1033920830,2,46,3),(72,4,1,41,0,'name',0,0,0,0,1060695457,3,51,3),(73,6,3,42,0,'name',0,44,0,0,1072180330,2,45,3),(74,6,3,42,0,'name',0,46,1,45,1072180330,2,44,3),(75,7,3,42,0,'description',0,43,2,44,1072180330,2,46,3),(76,7,3,42,0,'description',0,52,3,46,1072180330,2,43,3),(77,7,3,42,0,'description',0,21,4,43,1072180330,2,52,3),(78,7,3,42,0,'description',0,45,5,52,1072180330,2,21,3),(79,7,3,42,0,'description',0,46,6,21,1072180330,2,45,3),(80,7,3,42,0,'description',0,0,7,45,1072180330,2,46,3),(81,4,1,49,0,'name',0,0,0,0,1080220197,3,53,3),(82,4,1,50,0,'name',0,0,0,0,1080220220,3,54,3),(83,4,1,51,0,'name',0,0,0,0,1080220233,3,55,3),(84,4,1,52,0,'name',0,0,0,0,1705188118,4,56,3),(85,4,1,53,0,'name',0,0,0,0,1705188118,4,57,3),(86,181,13,54,0,'name',0,58,0,0,1705188118,4,58,3),(87,182,13,54,0,'identifier',0,0,1,58,1705188118,4,58,3),(88,4,1,55,0,'name',0,60,0,0,1705188118,1,59,3),(89,4,1,55,0,'name',0,0,1,59,1705188118,1,60,3),(90,4,1,56,0,'name',0,56,0,0,1705188118,5,61,3),(91,4,1,56,0,'name',0,0,1,61,1705188118,5,56,3),(92,4,1,57,0,'name',0,56,0,0,1705188118,5,61,3),(93,4,1,57,0,'name',0,0,1,61,1705188118,5,56,3),(94,186,14,58,0,'name',0,58,0,0,1705188118,5,59,3),(95,186,14,58,0,'name',0,62,1,59,1705188118,5,58,3),(96,186,14,58,0,'name',0,63,2,58,1705188118,5,62,3),(97,187,14,58,0,'identifier',0,0,3,62,1705188118,5,63,3),(98,6,3,59,0,'name',0,0,0,0,1705188214,2,64,3),(99,4,1,1,0,'name',0,66,0,0,1448889046,1,65,3),(100,4,1,1,0,'name',0,67,1,65,1448889046,1,66,3),(101,4,1,1,0,'name',0,65,2,66,1448889046,1,67,3),(102,155,1,1,0,'short_name',0,66,3,67,1448889046,1,65,3),(103,155,1,1,0,'short_name',0,67,4,65,1448889046,1,66,3),(104,155,1,1,0,'short_name',0,0,5,66,1448889046,1,67,3),(105,4,1,60,0,'name',0,68,0,0,1705188320,1,68,3),(106,155,1,60,0,'short_name',0,0,1,68,1705188320,1,68,3),(107,4,1,61,0,'name',0,69,0,0,1705188343,1,69,3),(108,155,1,61,0,'short_name',0,0,1,69,1705188343,1,69,3);
/*!40000 ALTER TABLE `ezsearch_object_word_link` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezsearch_word`
--

DROP TABLE IF EXISTS `ezsearch_word`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezsearch_word` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `object_count` int(11) NOT NULL DEFAULT 0,
  `word` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ezsearch_word_word_i` (`word`),
  KEY `ezsearch_word_obj_count` (`object_count`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezsearch_word`
--

LOCK TABLES `ezsearch_word` WRITE;
/*!40000 ALTER TABLE `ezsearch_word` DISABLE KEYS */;
INSERT INTO `ezsearch_word` VALUES (21,1,'the'),(42,1,'main'),(43,2,'group'),(44,3,'users'),(45,2,'anonymous'),(46,3,'user'),(47,1,'guest'),(48,1,'accounts'),(49,2,'administrator'),(50,1,'editors'),(51,1,'media'),(52,1,'for'),(53,1,'images'),(54,1,'files'),(55,1,'multimedia'),(56,3,'taxonomy'),(57,1,'tags'),(58,2,'root'),(59,2,'product'),(60,1,'catalog'),(61,2,'products'),(62,1,'tag'),(63,1,'product_root'),(64,1,'posters'),(65,1,'poky'),(66,1,'bulletin'),(67,1,'board'),(68,1,'categories'),(69,1,'posts');
/*!40000 ALTER TABLE `ezsearch_word` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezsection`
--

DROP TABLE IF EXISTS `ezsection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezsection` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(255) DEFAULT NULL,
  `locale` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `navigation_part_identifier` varchar(100) DEFAULT 'ezcontentnavigationpart',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezsection`
--

LOCK TABLES `ezsection` WRITE;
/*!40000 ALTER TABLE `ezsection` DISABLE KEYS */;
INSERT INTO `ezsection` VALUES (1,'standard','','Standard','ezcontentnavigationpart'),(2,'users','','Users','ezusernavigationpart'),(3,'media','','Media','ezmedianavigationpart'),(4,'taxonomy',NULL,'Taxonomy','ezcontentnavigationpart'),(5,'product_taxonomy',NULL,'Products Taxonomy','ezcontentnavigationpart');
/*!40000 ALTER TABLE `ezsection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezsite_data`
--

DROP TABLE IF EXISTS `ezsite_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezsite_data` (
  `name` varchar(60) NOT NULL DEFAULT '',
  `value` longtext NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezsite_data`
--

LOCK TABLES `ezsite_data` WRITE;
/*!40000 ALTER TABLE `ezsite_data` DISABLE KEYS */;
INSERT INTO `ezsite_data` VALUES ('ibexa-release','4.5');
/*!40000 ALTER TABLE `ezsite_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezurl`
--

DROP TABLE IF EXISTS `ezurl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezurl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` int(11) NOT NULL DEFAULT 0,
  `is_valid` int(11) NOT NULL DEFAULT 1,
  `last_checked` int(11) NOT NULL DEFAULT 0,
  `modified` int(11) NOT NULL DEFAULT 0,
  `original_url_md5` varchar(32) NOT NULL DEFAULT '',
  `url` longtext DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ezurl_url` (`url`(191))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezurl`
--

LOCK TABLES `ezurl` WRITE;
/*!40000 ALTER TABLE `ezurl` DISABLE KEYS */;
/*!40000 ALTER TABLE `ezurl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezurl_object_link`
--

DROP TABLE IF EXISTS `ezurl_object_link`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezurl_object_link` (
  `contentobject_attribute_id` int(11) NOT NULL DEFAULT 0,
  `contentobject_attribute_version` int(11) NOT NULL DEFAULT 0,
  `url_id` int(11) NOT NULL DEFAULT 0,
  KEY `ezurl_ol_coa_id` (`contentobject_attribute_id`),
  KEY `ezurl_ol_url_id` (`url_id`),
  KEY `ezurl_ol_coa_version` (`contentobject_attribute_version`),
  KEY `ezurl_ol_coa_id_cav` (`contentobject_attribute_id`,`contentobject_attribute_version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezurl_object_link`
--

LOCK TABLES `ezurl_object_link` WRITE;
/*!40000 ALTER TABLE `ezurl_object_link` DISABLE KEYS */;
/*!40000 ALTER TABLE `ezurl_object_link` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezurlalias`
--

DROP TABLE IF EXISTS `ezurlalias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezurlalias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `destination_url` longtext NOT NULL,
  `forward_to_id` int(11) NOT NULL DEFAULT 0,
  `is_imported` int(11) NOT NULL DEFAULT 0,
  `is_internal` int(11) NOT NULL DEFAULT 1,
  `is_wildcard` int(11) NOT NULL DEFAULT 0,
  `source_md5` varchar(32) DEFAULT NULL,
  `source_url` longtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ezurlalias_source_md5` (`source_md5`),
  KEY `ezurlalias_wcard_fwd` (`is_wildcard`,`forward_to_id`),
  KEY `ezurlalias_forward_to_id` (`forward_to_id`),
  KEY `ezurlalias_imp_wcard_fwd` (`is_imported`,`is_wildcard`,`forward_to_id`),
  KEY `ezurlalias_source_url` (`source_url`(191)),
  KEY `ezurlalias_desturl` (`destination_url`(191))
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezurlalias`
--

LOCK TABLES `ezurlalias` WRITE;
/*!40000 ALTER TABLE `ezurlalias` DISABLE KEYS */;
INSERT INTO `ezurlalias` VALUES (12,'content/view/full/2',0,1,1,0,'d41d8cd98f00b204e9800998ecf8427e',''),(13,'content/view/full/5',0,1,1,0,'9bc65c2abec141778ffaa729489f3e87','users'),(15,'content/view/full/12',0,1,1,0,'02d4e844e3a660857a3f81585995ffe1','users/guest_accounts'),(16,'content/view/full/13',0,1,1,0,'1b1d79c16700fd6003ea7be233e754ba','users/administrator_users'),(17,'content/view/full/14',0,1,1,0,'0bb9dd665c96bbc1cf36b79180786dea','users/editors'),(18,'content/view/full/15',0,1,1,0,'f1305ac5f327a19b451d82719e0c3f5d','users/administrator_users/administrator_user'),(20,'content/view/full/43',0,1,1,0,'62933a2951ef01f4eafd9bdf4d3cd2f0','media'),(21,'content/view/full/44',0,1,1,0,'3ae1aac958e1c82013689d917d34967a','users/anonymous_users'),(22,'content/view/full/45',0,1,1,0,'aad93975f09371695ba08292fd9698db','users/anonymous_users/anonymous_user'),(28,'content/view/full/51',0,1,1,0,'38985339d4a5aadfc41ab292b4527046','media/images'),(29,'content/view/full/52',0,1,1,0,'ad5a8c6f6aac3b1b9df267fe22e7aef6','media/files'),(30,'content/view/full/53',0,1,1,0,'562a0ac498571c6c3529173184a2657c','media/multimedia');
/*!40000 ALTER TABLE `ezurlalias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezurlalias_ml`
--

DROP TABLE IF EXISTS `ezurlalias_ml`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezurlalias_ml` (
  `parent` int(11) NOT NULL DEFAULT 0,
  `text_md5` varchar(32) NOT NULL DEFAULT '',
  `action` longtext NOT NULL,
  `action_type` varchar(32) NOT NULL DEFAULT '',
  `alias_redirects` int(11) NOT NULL DEFAULT 1,
  `id` int(11) NOT NULL DEFAULT 0,
  `is_alias` int(11) NOT NULL DEFAULT 0,
  `is_original` int(11) NOT NULL DEFAULT 0,
  `lang_mask` bigint(20) NOT NULL DEFAULT 0,
  `link` int(11) NOT NULL DEFAULT 0,
  `text` longtext NOT NULL,
  PRIMARY KEY (`parent`,`text_md5`),
  KEY `ezurlalias_ml_actt_org_al` (`action_type`,`is_original`,`is_alias`),
  KEY `ezurlalias_ml_text_lang` (`text`(32),`lang_mask`,`parent`),
  KEY `ezurlalias_ml_par_act_id_lnk` (`action`(32),`id`,`link`,`parent`),
  KEY `ezurlalias_ml_par_lnk_txt` (`parent`,`text`(32),`link`),
  KEY `ezurlalias_ml_act_org` (`action`(32),`is_original`),
  KEY `ezurlalias_ml_text` (`text`(32),`id`,`link`),
  KEY `ezurlalias_ml_id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezurlalias_ml`
--

LOCK TABLES `ezurlalias_ml` WRITE;
/*!40000 ALTER TABLE `ezurlalias_ml` DISABLE KEYS */;
INSERT INTO `ezurlalias_ml` VALUES (0,'18958e30bdca0cfac8256824e570a89b','eznode:63','eznode',0,47,0,1,3,47,'posts'),(0,'50e2736330de124f6edea9b008556fe6','nop:','nop',1,17,0,0,1,17,'media2'),(0,'62933a2951ef01f4eafd9bdf4d3cd2f0','eznode:43','eznode',1,9,0,1,3,9,'Media'),(0,'7a5dd46fdb234e993bf6ae0029a7cb17','eznode:54','eznode',0,38,0,1,3,38,'taxonomy'),(0,'86425c35a33507d479f71ade53a669aa','nop:','nop',1,3,0,0,1,3,'users2'),(0,'95101b3856a317eb94648f63cfece7cc','eznode:58','eznode',0,42,0,1,3,42,'products-taxonomy'),(0,'9bc65c2abec141778ffaa729489f3e87','eznode:5','eznode',1,2,0,1,3,2,'Users'),(0,'a4d1fdf4a7cd746c56dbb5241779104c','eznode:57','eznode',0,41,0,1,3,41,'product-catalog'),(0,'b0b5ccb4a195a07fd3eed14affb8695f','eznode:62','eznode',0,46,0,1,3,46,'categories'),(0,'d41d8cd98f00b204e9800998ecf8427e','eznode:2','eznode',1,1,0,1,3,1,''),(2,'a147e136bfa717592f2bd70bd4b53b17','eznode:14','eznode',1,6,0,1,3,6,'Editors'),(2,'c2803c3fa1b0b5423237b4e018cae755','eznode:44','eznode',1,10,0,1,3,10,'Anonymous-Users'),(2,'ca9bd8a65f31f1622f609b123a7b5a2e','eznode:61','eznode',0,45,0,1,3,45,'posters'),(2,'e57843d836e3af8ab611fde9e2139b3a','eznode:12','eznode',1,4,0,1,3,4,'Guest-accounts'),(2,'f89fad7f8a3abc8c09e1deb46a420007','eznode:13','eznode',1,5,0,1,3,5,'Administrator-users'),(3,'505e93077a6dde9034ad97a14ab022b1','nop:','nop',1,11,0,0,1,11,'anonymous_users2'),(3,'70bb992820e73638731aa8de79b3329e','eznode:12','eznode',1,26,0,0,1,4,'guest_accounts'),(3,'a147e136bfa717592f2bd70bd4b53b17','eznode:14','eznode',1,29,0,0,1,6,'editors'),(3,'a7da338c20bf65f9f789c87296379c2a','nop:','nop',1,7,0,0,1,7,'administrator_users2'),(3,'aeb8609aa933b0899aa012c71139c58c','eznode:13','eznode',1,27,0,0,1,5,'administrator_users'),(3,'e9e5ad0c05ee1a43715572e5cc545926','eznode:44','eznode',1,30,0,0,1,10,'anonymous_users'),(5,'5a9d7b0ec93173ef4fedee023209cb61','eznode:15','eznode',1,8,0,1,3,8,'Administrator-User'),(7,'a3cca2de936df1e2f805710399989971','eznode:15','eznode',1,28,0,0,0,8,'administrator_user'),(9,'2e5bc8831f7ae6a29530e7f1bbf2de9c','eznode:53','eznode',1,20,0,1,3,20,'Multimedia'),(9,'45b963397aa40d4a0063e0d85e4fe7a1','eznode:52','eznode',1,19,0,1,3,19,'Files'),(9,'59b514174bffe4ae402b3d63aad79fe0','eznode:51','eznode',1,18,0,1,3,18,'Images'),(10,'ccb62ebca03a31272430bc414bd5cd5b','eznode:45','eznode',1,12,0,1,3,12,'Anonymous-User'),(11,'c593ec85293ecb0e02d50d4c5c6c20eb','eznode:45','eznode',1,31,0,0,1,12,'anonymous_user'),(17,'2e5bc8831f7ae6a29530e7f1bbf2de9c','eznode:53','eznode',1,34,0,0,1,20,'multimedia'),(17,'45b963397aa40d4a0063e0d85e4fe7a1','eznode:52','eznode',1,33,0,0,1,19,'files'),(17,'59b514174bffe4ae402b3d63aad79fe0','eznode:51','eznode',1,32,0,0,1,18,'images'),(38,'d57ac45256849d9b13e2422d91580fb9','eznode:55','eznode',0,39,0,1,3,39,'tags'),(39,'63a9f0ea7bb98050796b649e85481845','eznode:56','eznode',0,40,0,1,3,40,'root'),(42,'95101b3856a317eb94648f63cfece7cc','eznode:59','eznode',0,43,0,1,3,43,'products-taxonomy'),(43,'0f8bb6935dfa5cdde71555c3b10f7c85','eznode:60','eznode',0,44,0,1,3,44,'product-root-tag');
/*!40000 ALTER TABLE `ezurlalias_ml` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezurlalias_ml_incr`
--

DROP TABLE IF EXISTS `ezurlalias_ml_incr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezurlalias_ml_incr` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezurlalias_ml_incr`
--

LOCK TABLES `ezurlalias_ml_incr` WRITE;
/*!40000 ALTER TABLE `ezurlalias_ml_incr` DISABLE KEYS */;
INSERT INTO `ezurlalias_ml_incr` VALUES (1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16),(17),(18),(19),(20),(21),(22),(24),(25),(26),(27),(28),(29),(30),(31),(32),(33),(34),(35),(36),(37),(38),(39),(40),(41),(42),(43),(44),(45),(46),(47);
/*!40000 ALTER TABLE `ezurlalias_ml_incr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezurlwildcard`
--

DROP TABLE IF EXISTS `ezurlwildcard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezurlwildcard` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `destination_url` longtext NOT NULL,
  `source_url` longtext NOT NULL,
  `type` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezurlwildcard`
--

LOCK TABLES `ezurlwildcard` WRITE;
/*!40000 ALTER TABLE `ezurlwildcard` DISABLE KEYS */;
/*!40000 ALTER TABLE `ezurlwildcard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezuser`
--

DROP TABLE IF EXISTS `ezuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezuser` (
  `contentobject_id` int(11) NOT NULL DEFAULT 0,
  `email` varchar(150) NOT NULL DEFAULT '',
  `login` varchar(150) NOT NULL DEFAULT '',
  `password_hash` varchar(255) DEFAULT NULL,
  `password_hash_type` int(11) NOT NULL DEFAULT 1,
  `password_updated_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`contentobject_id`),
  UNIQUE KEY `ezuser_login` (`login`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezuser`
--

LOCK TABLES `ezuser` WRITE;
/*!40000 ALTER TABLE `ezuser` DISABLE KEYS */;
INSERT INTO `ezuser` VALUES (10,'anonymous@link.invalid','anonymous','$2y$10$35gOSQs6JK4u4whyERaeUuVeQBi2TUBIZIfP7HEj7sfz.MxvTuOeC',7,NULL),(14,'admin@link.invalid','admin','$2y$10$FDn9NPwzhq85cLLxfD5Wu.L3SL3Z/LNCvhkltJUV0wcJj7ciJg2oy',7,NULL);
/*!40000 ALTER TABLE `ezuser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezuser_accountkey`
--

DROP TABLE IF EXISTS `ezuser_accountkey`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezuser_accountkey` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hash_key` varchar(32) NOT NULL DEFAULT '',
  `time` int(11) NOT NULL DEFAULT 0,
  `user_id` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `hash_key` (`hash_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezuser_accountkey`
--

LOCK TABLES `ezuser_accountkey` WRITE;
/*!40000 ALTER TABLE `ezuser_accountkey` DISABLE KEYS */;
/*!40000 ALTER TABLE `ezuser_accountkey` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezuser_role`
--

DROP TABLE IF EXISTS `ezuser_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezuser_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `contentobject_id` int(11) DEFAULT NULL,
  `limit_identifier` varchar(255) DEFAULT '',
  `limit_value` varchar(255) DEFAULT '',
  `role_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ezuser_role_role_id` (`role_id`),
  KEY `ezuser_role_contentobject_id` (`contentobject_id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezuser_role`
--

LOCK TABLES `ezuser_role` WRITE;
/*!40000 ALTER TABLE `ezuser_role` DISABLE KEYS */;
INSERT INTO `ezuser_role` VALUES (34,12,'','',2),(41,11,'','',1),(42,42,'','',1),(43,13,'','',4),(44,13,'Subtree','/1/2/',3),(45,13,'Subtree','/1/43/',3),(46,59,'','',11);
/*!40000 ALTER TABLE `ezuser_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ezuser_setting`
--

DROP TABLE IF EXISTS `ezuser_setting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ezuser_setting` (
  `user_id` int(11) NOT NULL DEFAULT 0,
  `is_enabled` int(11) NOT NULL DEFAULT 0,
  `max_login` int(11) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ezuser_setting`
--

LOCK TABLES `ezuser_setting` WRITE;
/*!40000 ALTER TABLE `ezuser_setting` DISABLE KEYS */;
INSERT INTO `ezuser_setting` VALUES (10,1,1000),(14,1,10);
/*!40000 ALTER TABLE `ezuser_setting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_attribute_definition`
--

DROP TABLE IF EXISTS `ibexa_attribute_definition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_attribute_definition` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `attribute_group_id` int(11) NOT NULL,
  `identifier` varchar(64) NOT NULL,
  `type` varchar(32) NOT NULL,
  `position` int(11) NOT NULL DEFAULT 0,
  `options` longtext DEFAULT NULL COMMENT '(DC2Type:json)',
  PRIMARY KEY (`id`),
  UNIQUE KEY `attribute_definition_identifier_idx` (`identifier`),
  KEY `ibexa_attribute_definition_attribute_group_idx` (`attribute_group_id`),
  CONSTRAINT `ibexa_attribute_definition_attribute_group_fk` FOREIGN KEY (`attribute_group_id`) REFERENCES `ibexa_attribute_group` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_attribute_definition`
--

LOCK TABLES `ibexa_attribute_definition` WRITE;
/*!40000 ALTER TABLE `ibexa_attribute_definition` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_attribute_definition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_attribute_definition_assignment`
--

DROP TABLE IF EXISTS `ibexa_attribute_definition_assignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_attribute_definition_assignment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `attribute_definition_id` int(11) NOT NULL,
  `field_definition_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `required` tinyint(1) NOT NULL DEFAULT 0,
  `discriminator` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ibexa_attribute_definition_assignment_main_uidx` (`field_definition_id`,`status`,`attribute_definition_id`),
  KEY `ibexa_attribute_definition_assignment_field_definition_idx` (`field_definition_id`),
  KEY `ibexa_attribute_definition_assignment_attribute_definition_idx` (`attribute_definition_id`),
  CONSTRAINT `ibexa_attribute_definition_assignment_attribute_definition_fk` FOREIGN KEY (`attribute_definition_id`) REFERENCES `ibexa_attribute_definition` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_attribute_definition_assignment`
--

LOCK TABLES `ibexa_attribute_definition_assignment` WRITE;
/*!40000 ALTER TABLE `ibexa_attribute_definition_assignment` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_attribute_definition_assignment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_attribute_definition_ml`
--

DROP TABLE IF EXISTS `ibexa_attribute_definition_ml`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_attribute_definition_ml` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `attribute_definition_id` int(11) NOT NULL,
  `language_id` bigint(20) NOT NULL,
  `name` varchar(190) NOT NULL,
  `name_normalized` varchar(190) NOT NULL,
  `description` varchar(10000) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ibexa_attribute_definition_ml_uidx` (`attribute_definition_id`,`language_id`),
  KEY `ibexa_attribute_definition_ml_language_idx` (`language_id`),
  KEY `ibexa_attribute_definition_ml_attribute_definition_idx` (`attribute_definition_id`),
  KEY `ibexa_attribute_definition_ml_name_idx` (`name_normalized`),
  CONSTRAINT `ibexa_attribute_definition_ml_attribute_definition_fk` FOREIGN KEY (`attribute_definition_id`) REFERENCES `ibexa_attribute_definition` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ibexa_attribute_definition_ml_language_fk` FOREIGN KEY (`language_id`) REFERENCES `ezcontent_language` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_attribute_definition_ml`
--

LOCK TABLES `ibexa_attribute_definition_ml` WRITE;
/*!40000 ALTER TABLE `ibexa_attribute_definition_ml` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_attribute_definition_ml` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_attribute_group`
--

DROP TABLE IF EXISTS `ibexa_attribute_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_attribute_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(64) NOT NULL,
  `position` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ibexa_attribute_group_identifier_uidx` (`identifier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_attribute_group`
--

LOCK TABLES `ibexa_attribute_group` WRITE;
/*!40000 ALTER TABLE `ibexa_attribute_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_attribute_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_attribute_group_ml`
--

DROP TABLE IF EXISTS `ibexa_attribute_group_ml`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_attribute_group_ml` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `attribute_group_id` int(11) NOT NULL,
  `language_id` bigint(20) NOT NULL,
  `name` varchar(190) NOT NULL,
  `name_normalized` varchar(190) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `attribute_group_ml_idx` (`attribute_group_id`,`language_id`),
  KEY `ibexa_attribute_group_ml_name_idx` (`name_normalized`),
  KEY `ibexa_attribute_group_ml_language_idx` (`language_id`),
  KEY `ibexa_attribute_group_ml_attribute_group_idx` (`attribute_group_id`),
  CONSTRAINT `ibexa_attribute_group_ml_attribute_group_fk` FOREIGN KEY (`attribute_group_id`) REFERENCES `ibexa_attribute_group` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ibexa_attribute_group_ml_language_fk` FOREIGN KEY (`language_id`) REFERENCES `ezcontent_language` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_attribute_group_ml`
--

LOCK TABLES `ibexa_attribute_group_ml` WRITE;
/*!40000 ALTER TABLE `ibexa_attribute_group_ml` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_attribute_group_ml` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_catalog`
--

DROP TABLE IF EXISTS `ibexa_catalog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_catalog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(64) NOT NULL,
  `creator_id` int(11) NOT NULL,
  `created` int(11) NOT NULL,
  `modified` int(11) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'draft',
  `query_string` longtext NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ibexa_catalog_identifier_idx` (`identifier`),
  KEY `ibexa_catalog_creator_idx` (`creator_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_catalog`
--

LOCK TABLES `ibexa_catalog` WRITE;
/*!40000 ALTER TABLE `ibexa_catalog` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_catalog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_catalog_ml`
--

DROP TABLE IF EXISTS `ibexa_catalog_ml`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_catalog_ml` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `catalog_id` int(11) NOT NULL,
  `language_id` bigint(20) NOT NULL,
  `name` varchar(190) NOT NULL,
  `name_normalized` varchar(190) NOT NULL,
  `description` varchar(10000) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ibexa_catalog_ml_catalog_language_uidx` (`catalog_id`,`language_id`),
  KEY `ibexa_catalog_catalog_idx` (`catalog_id`),
  KEY `ibexa_catalog_language_idx` (`language_id`),
  CONSTRAINT `ibexa_catalog_ml_fk` FOREIGN KEY (`catalog_id`) REFERENCES `ibexa_catalog` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_catalog_ml`
--

LOCK TABLES `ibexa_catalog_ml` WRITE;
/*!40000 ALTER TABLE `ibexa_catalog_ml` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_catalog_ml` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_content_customer_group`
--

DROP TABLE IF EXISTS `ibexa_content_customer_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_content_customer_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `field_id` int(11) NOT NULL,
  `field_version_no` int(11) NOT NULL,
  `customer_group_id` int(11) NOT NULL,
  `content_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ibexa_content_customer_group_attribute_uidx` (`field_id`,`field_version_no`),
  KEY `ibexa_content_customer_group_customer_group_idx` (`customer_group_id`),
  CONSTRAINT `ibexa_content_customer_group_attribute_fk` FOREIGN KEY (`field_id`, `field_version_no`) REFERENCES `ezcontentobject_attribute` (`id`, `version`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ibexa_content_customer_group_customer_group_fk` FOREIGN KEY (`customer_group_id`) REFERENCES `ibexa_customer_group` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_content_customer_group`
--

LOCK TABLES `ibexa_content_customer_group` WRITE;
/*!40000 ALTER TABLE `ibexa_content_customer_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_content_customer_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_currency`
--

DROP TABLE IF EXISTS `ibexa_currency`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_currency` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(3) NOT NULL,
  `subunits` smallint(6) NOT NULL,
  `enabled` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ibexa_currency_code_idx` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=180 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_currency`
--

LOCK TABLES `ibexa_currency` WRITE;
/*!40000 ALTER TABLE `ibexa_currency` DISABLE KEYS */;
INSERT INTO `ibexa_currency` VALUES (1,'AFN',2,0),(2,'EUR',2,0),(3,'ALL',2,0),(4,'DZD',2,0),(5,'USD',2,0),(6,'AOA',2,0),(7,'XCD',2,0),(8,'ARS',2,0),(9,'AMD',2,0),(10,'AWG',2,0),(11,'AUD',2,0),(12,'AZN',2,0),(13,'BSD',2,0),(14,'BHD',3,0),(15,'BDT',2,0),(16,'BBD',2,0),(17,'BYN',2,0),(18,'BZD',2,0),(19,'XOF',0,0),(20,'BMD',2,0),(21,'INR',2,0),(22,'BTN',2,0),(23,'BOB',2,0),(24,'BOV',2,0),(25,'BAM',2,0),(26,'BWP',2,0),(27,'NOK',2,0),(28,'BRL',2,0),(29,'BND',2,0),(30,'BGN',2,0),(31,'BIF',0,0),(32,'CVE',2,0),(33,'KHR',2,0),(34,'XAF',0,0),(35,'CAD',2,0),(36,'KYD',2,0),(37,'CLP',0,0),(38,'CLF',4,0),(39,'CNY',2,0),(40,'COP',2,0),(41,'COU',2,0),(42,'KMF',0,0),(43,'CDF',2,0),(44,'NZD',2,0),(45,'CRC',2,0),(46,'HRK',2,0),(47,'CUP',2,0),(48,'CUC',2,0),(49,'ANG',2,0),(50,'CZK',2,0),(51,'DKK',2,0),(52,'DJF',0,0),(53,'DOP',2,0),(54,'EGP',2,0),(55,'SVC',2,0),(56,'ERN',2,0),(57,'ETB',2,0),(58,'FKP',2,0),(59,'FJD',2,0),(60,'XPF',0,0),(61,'GMD',2,0),(62,'GEL',2,0),(63,'GHS',2,0),(64,'GIP',2,0),(65,'GTQ',2,0),(66,'GBP',2,0),(67,'GNF',0,0),(68,'GYD',2,0),(69,'HTG',2,0),(70,'HNL',2,0),(71,'HKD',2,0),(72,'HUF',2,0),(73,'ISK',0,0),(74,'IDR',2,0),(75,'XDR',0,0),(76,'IRR',2,0),(77,'IQD',3,0),(78,'ILS',2,0),(79,'JMD',2,0),(80,'JPY',0,0),(81,'JOD',3,0),(82,'KZT',2,0),(83,'KES',2,0),(84,'KPW',2,0),(85,'KRW',0,0),(86,'KWD',3,0),(87,'KGS',2,0),(88,'LAK',2,0),(89,'LBP',2,0),(90,'LSL',2,0),(91,'ZAR',2,0),(92,'LRD',2,0),(93,'LYD',3,0),(94,'CHF',2,0),(95,'MOP',2,0),(96,'MKD',2,0),(97,'MGA',2,0),(98,'MWK',2,0),(99,'MYR',2,0),(100,'MVR',2,0),(101,'MRU',2,0),(102,'MUR',2,0),(103,'XUA',0,0),(104,'MXN',2,0),(105,'MXV',2,0),(106,'MDL',2,0),(107,'MNT',2,0),(108,'MAD',2,0),(109,'MZN',2,0),(110,'MMK',2,0),(111,'NAD',2,0),(112,'NPR',2,0),(113,'NIO',2,0),(114,'NGN',2,0),(115,'OMR',3,0),(116,'PKR',2,0),(117,'PAB',2,0),(118,'PGK',2,0),(119,'PYG',0,0),(120,'PEN',2,0),(121,'PHP',2,0),(122,'PLN',2,0),(123,'QAR',2,0),(124,'RON',2,0),(125,'RUB',2,0),(126,'RWF',0,0),(127,'SHP',2,0),(128,'WST',2,0),(129,'STN',2,0),(130,'SAR',2,0),(131,'RSD',2,0),(132,'SCR',2,0),(133,'SLL',2,0),(134,'SGD',2,0),(135,'XSU',0,0),(136,'SBD',2,0),(137,'SOS',2,0),(138,'SSP',2,0),(139,'LKR',2,0),(140,'SDG',2,0),(141,'SRD',2,0),(142,'SZL',2,0),(143,'SEK',2,0),(144,'CHE',2,0),(145,'CHW',2,0),(146,'SYP',2,0),(147,'TWD',2,0),(148,'TJS',2,0),(149,'TZS',2,0),(150,'THB',2,0),(151,'TOP',2,0),(152,'TTD',2,0),(153,'TND',3,0),(154,'TRY',2,0),(155,'TMT',2,0),(156,'UGX',0,0),(157,'UAH',2,0),(158,'AED',2,0),(159,'USN',2,0),(160,'UYU',2,0),(161,'UYI',0,0),(162,'UYW',4,0),(163,'UZS',2,0),(164,'VUV',0,0),(165,'VES',2,0),(166,'VND',0,0),(167,'YER',2,0),(168,'ZMW',2,0),(169,'ZWL',2,0),(170,'XBA',0,0),(171,'XBB',0,0),(172,'XBC',0,0),(173,'XBD',0,0),(174,'XTS',0,0),(175,'XXX',0,0),(176,'XAU',0,0),(177,'XPD',0,0),(178,'XPT',0,0),(179,'XAG',0,0);
/*!40000 ALTER TABLE `ibexa_currency` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_customer_group`
--

DROP TABLE IF EXISTS `ibexa_customer_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_customer_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(64) NOT NULL,
  `global_price_rate` decimal(5,2) NOT NULL DEFAULT 0.00,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ibexa_customer_group_identifier_idx` (`identifier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_customer_group`
--

LOCK TABLES `ibexa_customer_group` WRITE;
/*!40000 ALTER TABLE `ibexa_customer_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_customer_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_customer_group_ml`
--

DROP TABLE IF EXISTS `ibexa_customer_group_ml`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_customer_group_ml` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_group_id` int(11) NOT NULL,
  `language_id` bigint(20) NOT NULL,
  `name` varchar(190) NOT NULL,
  `name_normalized` varchar(190) NOT NULL,
  `description` varchar(10000) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ibexa_customer_group_ml_customer_group_language_uidx` (`customer_group_id`,`language_id`),
  KEY `ibexa_customer_group_idx` (`customer_group_id`),
  KEY `ibexa_language_idx` (`language_id`),
  CONSTRAINT `ibexa_customer_group__ml_fk` FOREIGN KEY (`customer_group_id`) REFERENCES `ibexa_customer_group` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_customer_group_ml`
--

LOCK TABLES `ibexa_customer_group_ml` WRITE;
/*!40000 ALTER TABLE `ibexa_customer_group_ml` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_customer_group_ml` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_measurement_range_value`
--

DROP TABLE IF EXISTS `ibexa_measurement_range_value`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_measurement_range_value` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content_field_id` int(11) NOT NULL,
  `version_no` int(11) NOT NULL,
  `unit_id` int(11) NOT NULL,
  `min_value` double NOT NULL,
  `max_value` double NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ibexa_measurement_range_value_attr_ver` (`content_field_id`,`version_no`),
  UNIQUE KEY `ibexa_measurement_range_value_attr_ver_type_unit` (`content_field_id`,`version_no`,`unit_id`),
  KEY `IDX_90D7F03DF8BD700D` (`unit_id`),
  CONSTRAINT `ibexa_measurement_range_value_attr_fk` FOREIGN KEY (`content_field_id`, `version_no`) REFERENCES `ezcontentobject_attribute` (`id`, `version`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ibexa_measurement_range_value_unit_fk` FOREIGN KEY (`unit_id`) REFERENCES `ibexa_measurement_unit` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_measurement_range_value`
--

LOCK TABLES `ibexa_measurement_range_value` WRITE;
/*!40000 ALTER TABLE `ibexa_measurement_range_value` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_measurement_range_value` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_measurement_type`
--

DROP TABLE IF EXISTS `ibexa_measurement_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_measurement_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(192) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ibexa_measurement_type_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_measurement_type`
--

LOCK TABLES `ibexa_measurement_type` WRITE;
/*!40000 ALTER TABLE `ibexa_measurement_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_measurement_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_measurement_unit`
--

DROP TABLE IF EXISTS `ibexa_measurement_unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_measurement_unit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` int(11) NOT NULL,
  `identifier` varchar(192) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ibexa_measurement_unit_type_identifier` (`type_id`,`identifier`),
  KEY `IDX_7105A57BC54C8C93` (`type_id`),
  CONSTRAINT `ibexa_measurement_unit_type_fk` FOREIGN KEY (`type_id`) REFERENCES `ibexa_measurement_type` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_measurement_unit`
--

LOCK TABLES `ibexa_measurement_unit` WRITE;
/*!40000 ALTER TABLE `ibexa_measurement_unit` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_measurement_unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_measurement_value`
--

DROP TABLE IF EXISTS `ibexa_measurement_value`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_measurement_value` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content_field_id` int(11) NOT NULL,
  `version_no` int(11) NOT NULL,
  `unit_id` int(11) NOT NULL,
  `value` double NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ibexa_measurement_value_attr_ver` (`content_field_id`,`version_no`),
  UNIQUE KEY `ibexa_measurement_value_attr_ver_unit` (`content_field_id`,`version_no`,`unit_id`),
  KEY `IDX_286F4E67F8BD700D` (`unit_id`),
  CONSTRAINT `ibexa_measurement_value_attr_fk` FOREIGN KEY (`content_field_id`, `version_no`) REFERENCES `ezcontentobject_attribute` (`id`, `version`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ibexa_measurement_value_unit_fk` FOREIGN KEY (`unit_id`) REFERENCES `ibexa_measurement_unit` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_measurement_value`
--

LOCK TABLES `ibexa_measurement_value` WRITE;
/*!40000 ALTER TABLE `ibexa_measurement_value` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_measurement_value` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_migrations`
--

DROP TABLE IF EXISTS `ibexa_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_migrations` (
  `name` varchar(191) NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_migrations`
--

LOCK TABLES `ibexa_migrations` WRITE;
/*!40000 ALTER TABLE `ibexa_migrations` DISABLE KEYS */;
INSERT INTO `ibexa_migrations` VALUES ('000_taxonomy_content_types.yml','2024-01-14 00:21:57',61),('001_taxonomy_sections.yml','2024-01-14 00:21:57',51),('002_taxonomy_content.yml','2024-01-14 00:21:58',307),('003_taxonomy_permissions.yml','2024-01-14 00:21:58',88),('009_product_catalog.yml','2024-01-14 00:21:58',80),('010_currencies.yml','2024-01-14 00:21:58',249),('2022_06_23_09_39_product_categories.yaml','2024-01-14 00:21:59',342);
/*!40000 ALTER TABLE `ibexa_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_product_specification`
--

DROP TABLE IF EXISTS `ibexa_product_specification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_product_specification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `version_no` int(11) DEFAULT NULL,
  `field_id` int(11) DEFAULT NULL,
  `content_id` int(11) DEFAULT NULL,
  `code` varchar(64) NOT NULL,
  `base_product_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ibexa_product_specification_field_version_uidx` (`field_id`,`version_no`),
  KEY `ibexa_product_specification_cv` (`content_id`,`version_no`),
  KEY `ibexa_product_specification_fid` (`field_id`),
  KEY `ibexa_product_specification_pc` (`code`),
  KEY `ibexa_product_specification_base_pid` (`base_product_id`),
  CONSTRAINT `ibexa_product_specification_field_version_fk` FOREIGN KEY (`field_id`, `version_no`) REFERENCES `ezcontentobject_attribute` (`id`, `version`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_product_specification`
--

LOCK TABLES `ibexa_product_specification` WRITE;
/*!40000 ALTER TABLE `ibexa_product_specification` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_product_specification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_product_specification_asset`
--

DROP TABLE IF EXISTS `ibexa_product_specification_asset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_product_specification_asset` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_specification_id` int(11) NOT NULL,
  `uri` varchar(255) NOT NULL,
  `tags` longtext DEFAULT NULL COMMENT '(DC2Type:json)',
  PRIMARY KEY (`id`),
  KEY `ibexa_product_specification_asset_pid` (`product_specification_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_product_specification_asset`
--

LOCK TABLES `ibexa_product_specification_asset` WRITE;
/*!40000 ALTER TABLE `ibexa_product_specification_asset` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_product_specification_asset` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_product_specification_attribute`
--

DROP TABLE IF EXISTS `ibexa_product_specification_attribute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_product_specification_attribute` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_specification_id` int(11) NOT NULL,
  `attribute_definition_id` int(11) NOT NULL,
  `discriminator` varchar(190) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ibexa_product_specification_attribute_sid_idx` (`product_specification_id`),
  KEY `ibexa_product_specification_attribute_aid_idx` (`attribute_definition_id`),
  CONSTRAINT `ibexa_product_specification_attribute_aid` FOREIGN KEY (`attribute_definition_id`) REFERENCES `ibexa_attribute_definition` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `ibexa_product_specification_attribute_sid_fk` FOREIGN KEY (`product_specification_id`) REFERENCES `ibexa_product_specification` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_product_specification_attribute`
--

LOCK TABLES `ibexa_product_specification_attribute` WRITE;
/*!40000 ALTER TABLE `ibexa_product_specification_attribute` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_product_specification_attribute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_product_specification_attribute_boolean`
--

DROP TABLE IF EXISTS `ibexa_product_specification_attribute_boolean`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_product_specification_attribute_boolean` (
  `id` int(11) NOT NULL,
  `value` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ibexa_product_specification_attribute_boolean_value_idx` (`value`),
  CONSTRAINT `ibexa_product_specification_attribute_boolean_fk` FOREIGN KEY (`id`) REFERENCES `ibexa_product_specification_attribute` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_product_specification_attribute_boolean`
--

LOCK TABLES `ibexa_product_specification_attribute_boolean` WRITE;
/*!40000 ALTER TABLE `ibexa_product_specification_attribute_boolean` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_product_specification_attribute_boolean` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_product_specification_attribute_float`
--

DROP TABLE IF EXISTS `ibexa_product_specification_attribute_float`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_product_specification_attribute_float` (
  `id` int(11) NOT NULL,
  `value` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ibexa_product_specification_attribute_float_value_idx` (`value`),
  CONSTRAINT `ibexa_product_specification_attribute_float_fk` FOREIGN KEY (`id`) REFERENCES `ibexa_product_specification_attribute` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_product_specification_attribute_float`
--

LOCK TABLES `ibexa_product_specification_attribute_float` WRITE;
/*!40000 ALTER TABLE `ibexa_product_specification_attribute_float` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_product_specification_attribute_float` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_product_specification_attribute_integer`
--

DROP TABLE IF EXISTS `ibexa_product_specification_attribute_integer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_product_specification_attribute_integer` (
  `id` int(11) NOT NULL,
  `value` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ibexa_product_specification_attribute_integer_value_idx` (`value`),
  CONSTRAINT `ibexa_product_specification_attribute_integer_fk` FOREIGN KEY (`id`) REFERENCES `ibexa_product_specification_attribute` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_product_specification_attribute_integer`
--

LOCK TABLES `ibexa_product_specification_attribute_integer` WRITE;
/*!40000 ALTER TABLE `ibexa_product_specification_attribute_integer` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_product_specification_attribute_integer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_product_specification_attribute_measurement_range`
--

DROP TABLE IF EXISTS `ibexa_product_specification_attribute_measurement_range`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_product_specification_attribute_measurement_range` (
  `id` int(11) NOT NULL,
  `unit_id` int(11) DEFAULT NULL,
  `base_unit_id` int(11) DEFAULT NULL,
  `min_value` double DEFAULT NULL,
  `max_value` double DEFAULT NULL,
  `base_min_value` double DEFAULT NULL,
  `base_max_value` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ibexa_product_specification_attr_range_measurement_unit_idx` (`unit_id`),
  KEY `ibexa_product_specification_attr_range_measurement_baseunit_idx` (`base_unit_id`),
  CONSTRAINT `ibexa_product_specification_attr_range_measurement_baseunit_fk` FOREIGN KEY (`base_unit_id`) REFERENCES `ibexa_measurement_unit` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `ibexa_product_specification_attr_range_measurement_range_fk` FOREIGN KEY (`id`) REFERENCES `ibexa_product_specification_attribute` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ibexa_product_specification_attr_range_measurement_unit_fk` FOREIGN KEY (`unit_id`) REFERENCES `ibexa_measurement_unit` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_product_specification_attribute_measurement_range`
--

LOCK TABLES `ibexa_product_specification_attribute_measurement_range` WRITE;
/*!40000 ALTER TABLE `ibexa_product_specification_attribute_measurement_range` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_product_specification_attribute_measurement_range` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_product_specification_attribute_measurement_value`
--

DROP TABLE IF EXISTS `ibexa_product_specification_attribute_measurement_value`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_product_specification_attribute_measurement_value` (
  `id` int(11) NOT NULL,
  `unit_id` int(11) DEFAULT NULL,
  `base_unit_id` int(11) DEFAULT NULL,
  `value` double DEFAULT NULL,
  `base_value` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ibexa_product_specification_attr_value_measurement_unit_idx` (`unit_id`),
  KEY `ibexa_product_specification_attr_value_measurement_baseunit_idx` (`base_unit_id`),
  CONSTRAINT `ibexa_product_specification_attr_single_measurement_baseunit_fk` FOREIGN KEY (`base_unit_id`) REFERENCES `ibexa_measurement_unit` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `ibexa_product_specification_attr_single_measurement_unit_fk` FOREIGN KEY (`unit_id`) REFERENCES `ibexa_measurement_unit` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `ibexa_product_specification_attr_single_measurement_value_fk` FOREIGN KEY (`id`) REFERENCES `ibexa_product_specification_attribute` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_product_specification_attribute_measurement_value`
--

LOCK TABLES `ibexa_product_specification_attribute_measurement_value` WRITE;
/*!40000 ALTER TABLE `ibexa_product_specification_attribute_measurement_value` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_product_specification_attribute_measurement_value` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_product_specification_attribute_selection`
--

DROP TABLE IF EXISTS `ibexa_product_specification_attribute_selection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_product_specification_attribute_selection` (
  `id` int(11) NOT NULL,
  `value` varchar(190) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ibexa_product_specification_attribute_selection_value_idx` (`value`),
  CONSTRAINT `ibexa_product_specification_attribute_selection_fk` FOREIGN KEY (`id`) REFERENCES `ibexa_product_specification_attribute` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_product_specification_attribute_selection`
--

LOCK TABLES `ibexa_product_specification_attribute_selection` WRITE;
/*!40000 ALTER TABLE `ibexa_product_specification_attribute_selection` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_product_specification_attribute_selection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_product_specification_attribute_simple_custom`
--

DROP TABLE IF EXISTS `ibexa_product_specification_attribute_simple_custom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_product_specification_attribute_simple_custom` (
  `id` int(11) NOT NULL,
  `value` longtext DEFAULT NULL COMMENT '(DC2Type:json)',
  PRIMARY KEY (`id`),
  CONSTRAINT `ibexa_product_specification_attribute_simple_custom_fk` FOREIGN KEY (`id`) REFERENCES `ibexa_product_specification_attribute` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_product_specification_attribute_simple_custom`
--

LOCK TABLES `ibexa_product_specification_attribute_simple_custom` WRITE;
/*!40000 ALTER TABLE `ibexa_product_specification_attribute_simple_custom` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_product_specification_attribute_simple_custom` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_product_specification_availability`
--

DROP TABLE IF EXISTS `ibexa_product_specification_availability`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_product_specification_availability` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_code` varchar(64) NOT NULL,
  `availability` tinyint(1) NOT NULL DEFAULT 0,
  `is_infinite` tinyint(1) NOT NULL DEFAULT 0,
  `stock` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ibexa_product_specification_availability_product_code_uidx` (`product_code`),
  KEY `ibexa_product_specification_availability_idx` (`availability`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_product_specification_availability`
--

LOCK TABLES `ibexa_product_specification_availability` WRITE;
/*!40000 ALTER TABLE `ibexa_product_specification_availability` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_product_specification_availability` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_product_specification_price`
--

DROP TABLE IF EXISTS `ibexa_product_specification_price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_product_specification_price` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `currency_id` int(11) NOT NULL,
  `product_code` varchar(64) NOT NULL,
  `discriminator` varchar(20) NOT NULL DEFAULT 'main',
  `amount` decimal(19,4) NOT NULL,
  `custom_price_amount` decimal(19,4) DEFAULT NULL,
  `custom_price_rule` decimal(6,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ibexa_product_specification_price_product_code_idx` (`product_code`),
  KEY `ibexa_product_specification_price_currency_idx` (`currency_id`),
  CONSTRAINT `ibexa_product_specification_price_currency_fk` FOREIGN KEY (`currency_id`) REFERENCES `ibexa_currency` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_product_specification_price`
--

LOCK TABLES `ibexa_product_specification_price` WRITE;
/*!40000 ALTER TABLE `ibexa_product_specification_price` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_product_specification_price` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_product_specification_price_customer_group`
--

DROP TABLE IF EXISTS `ibexa_product_specification_price_customer_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_product_specification_price_customer_group` (
  `id` int(11) NOT NULL,
  `customer_group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ibexa_product_specification_price_customer_group_idx` (`customer_group_id`),
  CONSTRAINT `ibexa_product_specification_price_customer_group_fk` FOREIGN KEY (`customer_group_id`) REFERENCES `ibexa_customer_group` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_product_specification_price_customer_group`
--

LOCK TABLES `ibexa_product_specification_price_customer_group` WRITE;
/*!40000 ALTER TABLE `ibexa_product_specification_price_customer_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_product_specification_price_customer_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_product_type_specification_region_vat_category`
--

DROP TABLE IF EXISTS `ibexa_product_type_specification_region_vat_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_product_type_specification_region_vat_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `field_definition_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `region` varchar(190) NOT NULL,
  `vat_category` varchar(190) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ibexa_product_type_region_vat_category_product_region_fk` (`field_definition_id`,`status`,`region`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_product_type_specification_region_vat_category`
--

LOCK TABLES `ibexa_product_type_specification_region_vat_category` WRITE;
/*!40000 ALTER TABLE `ibexa_product_type_specification_region_vat_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_product_type_specification_region_vat_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_setting`
--

DROP TABLE IF EXISTS `ibexa_setting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_setting` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group` varchar(128) NOT NULL,
  `identifier` varchar(128) NOT NULL,
  `value` longtext NOT NULL COMMENT '(DC2Type:json)',
  PRIMARY KEY (`id`),
  UNIQUE KEY `ibexa_setting_group_identifier` (`group`,`identifier`),
  KEY `ibexa_setting_id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_setting`
--

LOCK TABLES `ibexa_setting` WRITE;
/*!40000 ALTER TABLE `ibexa_setting` DISABLE KEYS */;
INSERT INTO `ibexa_setting` VALUES (1,'personalization','installation_key','\"\"');
/*!40000 ALTER TABLE `ibexa_setting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_taxonomy_assignments`
--

DROP TABLE IF EXISTS `ibexa_taxonomy_assignments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_taxonomy_assignments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `entry_id` int(11) DEFAULT NULL,
  `content_id` int(11) NOT NULL,
  `version_no` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ibexa_taxonomy_assignments_unique_entry_content_idx` (`entry_id`,`content_id`,`version_no`),
  KEY `ibexa_taxonomy_assignments_entry_id_idx` (`entry_id`),
  KEY `ibexa_taxonomy_assignments_content_id_version_no_idx` (`content_id`,`version_no`),
  CONSTRAINT `FK_17589FEBBA364942` FOREIGN KEY (`entry_id`) REFERENCES `ibexa_taxonomy_entries` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_taxonomy_assignments`
--

LOCK TABLES `ibexa_taxonomy_assignments` WRITE;
/*!40000 ALTER TABLE `ibexa_taxonomy_assignments` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_taxonomy_assignments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_taxonomy_entries`
--

DROP TABLE IF EXISTS `ibexa_taxonomy_entries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_taxonomy_entries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parent_id` int(11) DEFAULT NULL,
  `identifier` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `names` longtext NOT NULL COMMENT '(DC2Type:array)',
  `mainLanguageCode` varchar(255) NOT NULL,
  `content_id` int(11) NOT NULL,
  `left` int(11) NOT NULL,
  `right` int(11) NOT NULL,
  `root` int(11) DEFAULT NULL,
  `lvl` int(11) NOT NULL,
  `taxonomy` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ibexa_taxonomy_entries_identifier_idx` (`taxonomy`,`identifier`),
  KEY `IDX_74706FD6727ACA70` (`parent_id`),
  KEY `ibexa_taxonomy_entries_content_id_idx` (`content_id`),
  CONSTRAINT `FK_74706FD6727ACA70` FOREIGN KEY (`parent_id`) REFERENCES `ibexa_taxonomy_entries` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_taxonomy_entries`
--

LOCK TABLES `ibexa_taxonomy_entries` WRITE;
/*!40000 ALTER TABLE `ibexa_taxonomy_entries` DISABLE KEYS */;
INSERT INTO `ibexa_taxonomy_entries` VALUES (1,NULL,'root','Root','a:1:{s:6:\"eng-GB\";s:4:\"Root\";}','eng-GB',54,1,2,1,0,'tags'),(2,NULL,'product_root','Product Root Tag','a:1:{s:6:\"eng-GB\";s:16:\"Product Root Tag\";}','eng-GB',58,1,2,2,0,'product_categories');
/*!40000 ALTER TABLE `ibexa_taxonomy_entries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_token`
--

DROP TABLE IF EXISTS `ibexa_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `identifier` varchar(128) DEFAULT NULL,
  `created` int(11) NOT NULL DEFAULT 0,
  `expires` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ibexa_token_unique` (`token`,`identifier`,`type_id`),
  KEY `IDX_B5412887C54C8C93` (`type_id`),
  CONSTRAINT `ibexa_token_type_id_fk` FOREIGN KEY (`type_id`) REFERENCES `ibexa_token_type` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_token`
--

LOCK TABLES `ibexa_token` WRITE;
/*!40000 ALTER TABLE `ibexa_token` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_token_type`
--

DROP TABLE IF EXISTS `ibexa_token_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_token_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(64) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ibexa_token_type_unique` (`identifier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_token_type`
--

LOCK TABLES `ibexa_token_type` WRITE;
/*!40000 ALTER TABLE `ibexa_token_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_token_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_user_invitations`
--

DROP TABLE IF EXISTS `ibexa_user_invitations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_user_invitations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `site_access_name` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `creation_date` int(11) NOT NULL,
  `used` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ibexa_user_invitations_email_uindex` (`email`(191)),
  UNIQUE KEY `ibexa_user_invitations_hash_uindex` (`hash`(191)),
  KEY `ibexa_user_invitations_email_idx` (`email`),
  KEY `ibexa_user_invitations_hash_idx` (`hash`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_user_invitations`
--

LOCK TABLES `ibexa_user_invitations` WRITE;
/*!40000 ALTER TABLE `ibexa_user_invitations` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_user_invitations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_user_invitations_assignments`
--

DROP TABLE IF EXISTS `ibexa_user_invitations_assignments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_user_invitations_assignments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `invitation_id` int(11) NOT NULL,
  `user_group_id` int(11) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `limitation_type` varchar(255) DEFAULT NULL,
  `limitation_value` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_DA5A7872A35D7AF0` (`invitation_id`),
  CONSTRAINT `ibexa_user_invitations_assignments_ibexa_user_invitations_id_fk` FOREIGN KEY (`invitation_id`) REFERENCES `ibexa_user_invitations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_user_invitations_assignments`
--

LOCK TABLES `ibexa_user_invitations_assignments` WRITE;
/*!40000 ALTER TABLE `ibexa_user_invitations_assignments` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_user_invitations_assignments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ibexa_workflow_version_lock`
--

DROP TABLE IF EXISTS `ibexa_workflow_version_lock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ibexa_workflow_version_lock` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content_id` int(11) NOT NULL,
  `version` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created` int(11) NOT NULL,
  `modified` int(11) NOT NULL,
  `is_locked` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `idx_version_lock_content` (`content_id`),
  KEY `idx_version_lock_user` (`user_id`),
  KEY `idx_version_lock_content_version` (`content_id`,`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ibexa_workflow_version_lock`
--

LOCK TABLES `ibexa_workflow_version_lock` WRITE;
/*!40000 ALTER TABLE `ibexa_workflow_version_lock` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibexa_workflow_version_lock` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-13 23:38:11
