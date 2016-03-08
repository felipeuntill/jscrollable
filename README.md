# jscrollable
Automatically exported from code.google.com/p/jscrollable
____
![alt tag](https://raw.githubusercontent.com/felipeuntill/jscrollable/master/media/images/jscrollable.jpg)

The best way to create floating objects

http://jscrollable.googlecode.com/svn/public/images/logo/450x125.jpg

**What is jScrollable**

The jScrollable are a plugin to create floating menu and objects made easy.

**Requirements:**

jQuery 1.3.2 or newest

**Usage**
--
Loading:

    <head> 
      <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
      <script type="text/javascript" src="jscrollable/jscrollable.0.0.1.js"></script> 
      <script type="text/javascript"> $(document).ready( function() { $('#object').jScrollable({}); }); </script> 
    </head>

Parameters:

    ymove, parameter responsible of validate if the matched object needs to be moved on the Y axis. 
    Default Value = True (Boolean) 
    $('#object').jScrollable({ ymove : true });
  
    xmove, parameter responsible of validate if the matched object needs to be moved on the X axis. 
    Default Value = False (Boolean) 
    $('#object').jScrollable({ xmove : true });
  
    scrolldelay, parameter responsible of save the delay of the animation. 
    Default Value = 500 
    $('#object').jScrollable({ scrolldelay : 500 });

Credits:
--
Creator: * Felipe Assunção ( felipeillustrator(a)gmail.com ). </br>
Documenter: * Leandro Bisson ( leandro.bisson(a)gmail.com ).
