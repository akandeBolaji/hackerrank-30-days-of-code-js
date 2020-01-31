process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
function Node(data){
    this.data=data;
    this.next=null;
}
function Solution(){

	this.insert=function(head,data){
          if (head == null) {
            head = new Node(data);
          }
          else {
              //let tail equals the present head value
              let tail = head;
              //while tail.next is not null, loop through and keep changing tail value till you get last value where 
              while (tail.next !== null) {
                  tail = tail.next;
              }
              //now that we have gotten the last data where next is null, lets change the next tail value to the new node data we want to insert
              tail.next = new Node(data);
              //this automatically updates on head since all tails value share the same reference with head i.e tail = head
          }
          return head;
    };
    //

	this.display=function(head){
        var start=head;
            while(start){
                process.stdout.write(start.data+" ");
                start=start.next;
            }
    };
}
function main(){
    var T=parseInt(readLine());
    var head=null;
    var mylist=new Solution();
    for(i=0;i<T;i++){
        var data=parseInt(readLine());
        head=mylist.insert(head,data);
    }
    mylist.display(head);
}		
