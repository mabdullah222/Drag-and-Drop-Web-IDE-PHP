<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live compiler</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div class="bigbox">
        <div class="cont1">
            <!-- variables, arithmetic operations, function creation, loops, conditional statements, reading and writing a text file, and creating an output node -->
            <div class="component" id="variable" draggable="true"><a>Variable</a></div>
            <div class="component" id="arithmetic" draggable="true"><a>Arithmetic Operation</a></div>
            <div class="component" id='functioncreate' draggable="true"><a>Function</a></div>
            <div class="component" id="loop" draggable="true"><a>Loop</a></div>
            <div class="component" id="ifcon" draggable="true"><a>If Statement</a></div>
            <div class="component" id="elseifcon" draggable="true"><a>Else if Statement</a></div>
            <div class="component" id="elsecon" draggable="true"><a>Else Statement</a></div>
            <div class="component" id="readFile" draggable="true"><a>Reading File</a></div>
            <div class="component" id="writeFile" draggable="true"><a>Writing File</a></div>
            <div class="component" id="echo" draggable="true"><a>Echo</a></div>
            <div class="component" id="functioncall" draggable="true"><a>Function Call</a></div>
        </div>
        <div class="cont2 dropzone" id="middlebox">
            <div class="header">
                <button id="generate">Generate Code</button>
            </div>
            
        </div>
        <div class="cont3" id="cont3">
            <div class="header">
                <form action="index.php" method="post">
                    <input type="hidden" name="code">
                    <button type="submit" id="form">Run Code</button>
                </form>
            </div>
            <div class="code"></div>
            <hr>
            <div class="output">
            <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $new_text="";
        $code=$_POST['code'];
        echo "<h1>Output:</h1></br>";
        eval($code);
    }
    
?>
            </div>
        </div>
    </div>
    <script src="draganddrop.js"></script>
    <script src="generate.js"></script>
</body>
</html>