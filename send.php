<?php 
function spamcheck($field)
  {
	  $field=filter_var($field, FILTER_SANITIZE_EMAIL);
	  
	  if(filter_var($field, FILTER_VALIDATE_EMAIL))
		{
			return TRUE;
		}
	  else
		{
			return FALSE;
		}
  }
if(!empty($_POST['envoyer']))
{ 
	if (isset($_REQUEST['email']))
	{
		$mailcheck = spamcheck($_REQUEST['email']);
		if ($mailcheck==FALSE)
		{
			echo "<script>alert('Email pas correct');location.href='index.html';</script>";
		}
		 else
		{
			$email = stripslashes($_REQUEST['email']) ; 
			$subject = stripslashes($_REQUEST['objet']) ;
			$nom = stripslashes($_REQUEST['name']) ;
			$message = stripslashes($_REQUEST['message']) ;
			if(@mail("GuoNanHQ@gmail.com", "Subject: ".$subject,"-----------------Ce message vient du site 'MyPage' ---------------------\n\n\n".$message, "From:".$email, "Nom: ".$nom ))
				echo "<script>alert('OK');location.href='index.html';</script>";
			else{
				echo "<script>alert('Erreur');location.href='index.html';</script>";
				}
		}
	}
}
else
{
	echo "<script>location.href='index.html';location.href='index.html';</script>";
}
?>