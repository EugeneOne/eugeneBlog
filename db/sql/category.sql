CREATE TABLE IF NOT EXISTS `category` (
    `id` INT NOT NULL AUTO_INCREMENT COMMENT '分类id',
    `name` VARCHAR(100) COMMENT '分类名',
    PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

-- INSERT INTO `category` set name='默认分类';