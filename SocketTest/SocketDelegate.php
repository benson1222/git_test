<?php
interface SocketDelegate{
	/**
	*数据读取
	*/
	public function readData($socket, $recv_msg);
}
?>