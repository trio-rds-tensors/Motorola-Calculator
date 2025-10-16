<!DOCTYPE html>
  <html lang="en">
  <head>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer> </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>calculator</title>
  </head>
  <body>
    <center>

     <div class="div1">
      <div class="div2">
        <form class="form" method="POST" action="">
         <input type="text" class="box" value="" name='exp'>  
        </form>
      </div>

        <br>
        <button class="ac" onclick="allclear()">AC</button>
        <button class="op"  onclick="addbkt()">( )</button>
        <button class="op" onclick="addop('%')">%</button>
        <button class="op" onclick="addop('÷')">÷</button>
        <br>
        <button class="num" onclick="addnum('7')">7</button>
        <button class="num" onclick="addnum('8')">8</button>
        <button class="num" onclick="addnum('9')">9</button>
        
        <button class="op" onclick="addop('×')">×</button>
        <br>
        <button class="num" onclick="addnum('4')">4</button>
        <button class="num" onclick="addnum('5')">5</button>
        <button class="num" onclick="addnum('6')">6</button>
        <button class="op" onclick="addop('-')">-</button>
        <br>
        <button class="num" onclick="addnum('1')">1</button>
        <button class="num" onclick="addnum('2')">2</button>
        <button class="num" onclick="addnum('3')">3</button>
        <button class="op" onclick="addop('+')">+</button>
        <br>
        <button class="num" onclick="addnum('0')">0</button>
        <button class="num" onclick="adddot()">.</button>
        <button class="num" onclick="backspace()">⌫</button>
        <button class="equalto" onclick="equalto()">=</button>
      </div>
      
      <?php
      if($_SERVER["REQUEST_METHOD"]=="POST")
      {
        $value=$_POST["exp"];
        if(isset($value)) //if there is any data in value then isset() return true
        {
          $value=str_replace('×','*',$value);
          $value=str_replace('÷','/',$value);
          try 
          {
			if (!preg_match('/^[0-9+\-*\/(). %]+$/', $value))
			{
				throw new Exception("Invalid characters in expression");
			}
            $result=eval("return ($value);");
            if(($result===false)|| ($result===null))
            {
              echo "<script> document.querySelector('.box').value='invalid'</script>";
            }
            else 
            {
              echo "<script> document.querySelector('.box').value=$result </script>";
            }
          }
          catch (Throwable $Error)
          {
            echo "<script> document.querySelector('.box').value='Invaild'</script>";
          }
        }
      }
      ?>
    </center>
    <!--<script src="script.js"></script>-->
    
  </body>
  </html>