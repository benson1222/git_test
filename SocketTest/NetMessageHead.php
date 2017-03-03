<?php

/**
 * Created by PhpStorm.
 * User: benson
 * Date: 2017/3/3 0003
 * Time: 上午 10:23
 */
//数据文件头
class NetMessageHead
{
    public $bMainID;        //处理主类型
    public $bAssistantID;   //辅助处理类型ID
    public $bHandleCode;    //数据包处理代码
    public $bReserve;       //保留字段
    public $bObject;        //数据内容
    function __construct()
    {
        $this.$bMainID = 0;
        $this.$bAssistantID = 0;
        $this.$bHandleCode = 0;
        $this.$bReserve = 0;
        $this.$bObject = null;
    }
}