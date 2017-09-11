<?php
require ('./phpmailer/PHPMailerAutoload.php');

 $mail = new PHPMailer;
 $mail -> isSMTP();
 $mail->Host = 'smtp.mail.ru';
 $mail->SMTPAuth = true;
 $mail->Username = 'pashebor@mail.ru';
 $mail->Password = 'ltvmzyjd90';
 $mail->SMTPSecure = 'ssl';
 $mail->Port = '465';
 $mail->CharSet = 'UTF-8';

 $mail->From = 'pashebor@mail.ru';
 $mail->FromName = 'Генератор продаж';
 $mail->addAddress('pashebor@gmail.com', 'Генератор продаж');
 $mail->addAddress('info@salesgenerator.pro', 'Генератор продаж');
 $mail->addAddress('pm@salesgenerator.pro', 'Генератор продаж');
 $mail->addAddress('vip@salesgenerator.pro', 'Генератор продаж');
 $mail->addAddress('ac@salesgenerator.pro', 'Генератор продаж');
 $mail->addAddress('salesgenerates@mail.ru', 'Генератор продаж');
 $mail->addAddress('sd@salesgenerator.pro', 'Генератор продаж');
 $mail->isHtml(true);


if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $idToDel = $_POST["formData"];
    /*$requestCallback = preg_replace('/(\w+)\s{0,1}:/', '"\1":', str_replace(array("\r\n", "\r", "\n", "\t"), "", $idToDel))*/;
    $arrRequest = json_decode($idToDel, true);
    if (!empty($arrRequest)) {
     switch ($arrRequest['form-name']) {
      case 'include-audit':
       $mail->Subject = 'Заказ Примера рекомендаций из аудита';
       $mail->Body = '<div><p>Электронная почта клиента: '.$arrRequest['email'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p></div>';
       $mail->send();
          echo json_encode(["response" => true]);
          break;
      case 'callback':
       $mail->Subject = 'Заказ аудита - обратный звонок';
       $mail->Body = '<div><p>Время звонка: '.$arrRequest['callback'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p></div>';
       $mail->send();
       echo json_encode(["response" => true]);
             break;
      case 'know':
       $mail->Subject = 'Заказ аудита - первый экран';
       $mail->Body = '<div><p>Номер телефона: '.$arrRequest['phone'].'</p></div>';
       $mail->send();
       echo json_encode(["response" => true]);
             break;
       case 'rates':
        $mail->Subject = 'Заказ аудита - тариф '.$arrRequest['rate'];
        $mail->Body = '<div><p>Номер телефона: '.$arrRequest['phone'].'</p><p>Время звонка: '.$arrRequest['callback'].'</p><p>Тариф: '.$arrRequest['rate'].'</p></div>';
        $mail->send();
        echo json_encode(["response" => true]);
             break;
       case 'audits':
        $mail->Subject = 'Заказ аудита - второй экран '.$arrRequest['rate'];
        $mail->Body = '<div><p>Номер телефона: '.$arrRequest['phone'].'</p><p>Время звонка: '.$arrRequest['callback'].'</p><p>Тема: '.$arrRequest['type'].'</p></div>';
        $mail->send();
        echo json_encode(["response" => true]);
             break;
     }
    } else {
     echo json_encode(["response" => false]);
    }
}
?>