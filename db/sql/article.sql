CREATE TABLE IF NOT EXISTS `article` (
    `id` INT(8) NOT NULL AUTO_INCREMENT COMMENT '文章id',
    `title` TEXT(0) NOT NULL COMMENT '文章题目',
    `content` TEXT(0) NOT NULL COMMENT '文章内容',
    `create_time` DATETIME NOT NULL COMMENT '创建时间',
    `update_time` DATETIME COMMENT '修改时间',
    `md` TEXT(0) COMMENT 'markdown',
    `cid` INT DEFAULT 1 COMMENT '分类ID',
    PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8