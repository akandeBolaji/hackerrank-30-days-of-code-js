<?php
    class Difference{
    private $elements=array();
    public $maximumDifference;
    

// Write your code here
function __construct($elements) {
    $this->elements =  $elements;
    $this->maximumDifference = 0;
}

function computeDifference() {
    $length = count($this->elements);
    for ($i =0; $i < $length; $i++) {
        for ($j = ($i + 1); $j < $length; $j++) {
            $diff = $this->elements[$i] - $this->elements[$j];
            if (abs($diff) > $this->maximumDifference) {
                $this->maximumDifference = abs($diff);
            } 
        } 
    }   
}

} //End of Difference class  
     

$N=intval(fgets(STDIN));
$a =array_map('intval', explode(' ', fgets(STDIN)));
$d=new Difference($a);
$d->ComputeDifference();
print ($d->maximumDifference);
?>
