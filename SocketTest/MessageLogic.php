<?php 
/**
* 
*/
include "SocketDelegate.php";
include "ServerSocket.php";
include "NetMessageHead.php";
include "NetLoginData.php";
include "ProtocolMessage.php";
class MessageLogic implements SocketDelegate
{
	private  static  $instance;
    private $webSocket;

    public  static  function  getInstance(){
        if(!(self::$instance instanceof  self)){
            self::$instance =  new self;
        }
        return self::$instance;
    }

    public function initNetLogin(){
        $this->initSocket();
    }

	function __construct()
	{
		# code...

	}

    function __destruct() {
    }

	private function initSocket(){
        $this->webSocket = new WebSocket("127.0.0.1", "1935",$this);
    }

    public function readData($socket, $recv_msg){
        $obj = json_decode($recv_msg);
        print $recv_msg;
        $mainID = $obj->{'bMainID'};
        $assistantID = $obj->{'bAssistantID'};
        if ($mainID == MDM_GR_LOGON){
            echo "login";
            if ($assistantID == ASS_GR_LOGON_BY_ID){
                echo "login by ID";
                $loginData = new NetLoginData();
                $loginData->UserId = 123456;
                $loginData->userName = "test";
                $this->sendData($mainID,$assistantID,$loginData);
            }
        }
//        $netHead = json_decode($recv_msg);
//        ($netHead(NetMessageHead))->bMainID = 1;
//	    $loginData = new NetLoginData();
//        $loginData->UserId = 123456;
//        $loginData->userName = "test";
//        echo json_encode($loginData);
    }

    public function sendData($MainID,$AssistantID,$object){
        $netHead = new NetMessageHead();
        $netHead->bMainID = $MainID;
        $netHead->bAssistantID = $AssistantID;
        $netHead->bObject = $object;
        $data = json_encode($netHead);
        print $data;
        $this->webSocket->sendData($data);
    }
}

MessageLogic::getInstance()->initNetLogin();
?>