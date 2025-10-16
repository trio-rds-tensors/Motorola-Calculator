let dot=false;
        function addnum(num)
        {
          
          if(document.querySelector(".box").value=="0")
          {
            document.querySelector(".box").value=num;
          }
          else
          { document.querySelector(".box").value+=num;
          }
        }
        function allclear()
        {
          document.querySelector(".box").value="";
        }
        function backspace()
        {
			if( document.querySelector(".box").value.at(-1) == '.')
			{
				dot = false;
			}
          document.querySelector(".box").value=document.querySelector(".box").value.slice(0,-1);
          let value =document.querySelector(".box").value;
          const opt="+-%×÷(";
         for(const i of value)
          {
            if(i == '.')
            {
              dot = true;
            }
            if(opt.includes(i))
            {
              dot=false;
            }
          }
        }  
        function addop(op)
        {
          
          let value=document.querySelector(".box").value;
          const opt="+-%×÷";
          if(value=='' && (op=='+' || op=='%' || op=='×' || op=='÷'))
          {
            document.querySelector(".box").value='';
          }
          else if(opt.includes(value.at(-1)))
          {
            backspace();
            document.querySelector(".box").value+=op;
          }
          else if ((value.at(-1)=='.') || (value.at(-1)=='('))
          {
            document.querySelector(".box").value=document.querySelector(".box").value;
          }
          else
          {  document.querySelector(".box").value+=op;
          }
          dot=false;
        }
        function addbkt()
        {
          let value=document.querySelector(".box").value;
          let open=0;
          let close=0;
          let num="1234567890";

          if(value.at(-1) == '.' || dot)
          {
            document.querySelector(".box").value = document.querySelector(".box").value;
            return;
          }
          for(const i of value)
          {
            if(i=='(')
            {
              open++;
            }
            if(i==')')
            {
              close++;
            }
          }  
            let opt="%+-×÷";
            if(value=='')
            {
              document.querySelector(".box").value+='(';
            }
           else if(num.includes(value.at(-1)) && (open>close))
            {
              document.querySelector(".box").value+=')';
            }
            
            else if(opt.includes(value.at(-1)))
            {
              document.querySelector(".box").value+='(';
            }
            else if(value.at(-1)=='(')
            {
              document.querySelector(".box").value+='(';
            }
            else if(open>close)
            {
              document.querySelector(".box").value+=')';
            }
            else
            {
              document.querySelector(".box").value+='×(';
            }
          dot = false;
        }
        function adddot()
        {
          if(dot)
          {
          document.querySelector(".box").value=document.querySelector(".box").value;
          return;
          }
          let value =document.querySelector(".box").value;
          let num="0123456789"
          if(value=='')
          {
            document.querySelector(".box").value+='0.';
          }
          else if(value.at(-1)=='.')
          {
            document.querySelector(".box").value=document.querySelector(".box").value;
          }
          else if(!num.includes(value.at(-1)))
          {
            document.querySelector(".box").value+='0.';
          }
          else
          {
            document.querySelector(".box").value+='.';
          }
          dot = true ;
        }
        function equalto()
        {
          let value =document.querySelector(".box").value;
          let num = "0987654321";
          let open=0;
          let close=0;
          for(const i of value)
          {
            if(i=='(')
            {
              open++;
            }
            if(i==')')
            {
              close++;
            }
          }  
          if((num.includes(value.at(-1)) || value.at(-1) == ')') && (open == close))
          {
            document.querySelector(".form").submit();
          }
        }