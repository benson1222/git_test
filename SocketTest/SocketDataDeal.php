<?php
class SocketDataDeal implements SocketDelegate {
    private  static  $instance;
    private $webSocket;

    public  static  function  getInstance(){
        if(!(self::$instance instanceof  self)){
            self::$instance =  new self;
        }
        return self::$instance;
    }
	private function __construct()
    {
    }

    public function initSocket(){
        $this->webSocket = new WebSocket("127.0.0.1", "1935");
    }

    public function dealMsg(){}

    public function readData($socket, $recv_msg){

    }
}
?>