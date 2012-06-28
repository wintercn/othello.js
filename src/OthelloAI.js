
var OthelloAI = {};

new function(){

OthelloAI.Pattern= pattern;

var directions=[-11,-10,-9,-1,1,9,10,11];
function pattern()
{
    var gene = [1,1,1,1];
    this.gene = gene;
    for(var i=0;i<100;i++)this[i]=0;
    this[54]=this[45]=1;this[55]=this[44]=2;
    this.divergence=0;
    this.color=1;
    this.moves=0;

    var stableProto = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3,3, 0, 0, 0, 0, 0, 0, 0, 0, 3,3, 0, 0, 0, 0, 0, 0, 0, 0, 3,3, 0, 0, 0, 0, 0, 0, 0, 0, 3,3, 0, 0, 0, 0, 0, 0, 0, 0, 3,3, 0, 0, 0, 0, 0, 0, 0, 0, 3,3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
    this.load=function(arr)
    {
        for(var y=1;y<=8;y++)
        {
            for(var x=1;x<=8;x++)
            {
                this[y*10+x]=arr[y-1][x-1];         
            }

        }
    }

    this.pass=function()
    {
        for(var y=1;y<=8;y++)
        {
            for(var x=1;x<=8;x++)
            {
                if(this[y*10+x]==0) 
                {
                    if(this.move(x,y,this.color))
                    {
                        return false;
                    }
                }                 
            }

        }
        //alert("pass");
        this.color = 3 - this.color;
        return true;
    }


    this.clone=function()
    {
        function pattern(){}
        pattern.prototype=this;
        return new pattern();
    }
    this.toString=function()
    {
        var icon=[" ","*","o"]
        var r="";
        for(var y=1;y<=8;y++)
        {
            for(var x=1;x<=8;x++)
            {
                r+=icon[this[y*10+x]]+" ";
                //r+=stableDiscs[y*10+x]+" ";
            }
            r+="\n";
        }
        return r+this.exact();
    }
    
    this.exact=function()
    {
        var r=[0,0,0];
        for(var y=1;y<=8;y++)
        {
            for(var x=1;x<=8;x++)
            {
                r[this[y*10+x]]++;
            }
        }
        if(r[this.color]==0) return -64;
        if(r[3-this.color]==0) return 64;
        return (r[this.color]-r[3-this.color]);
    }

    this.calculate=function()
    {
        var r=[0,0,0];
        var r=this.divergence;
        if(this[11])r+=((this[11]==this.color)?1:-1)*25*gene[0];
        else if(this[22]==this.color)r-=15*gene[1];

        if(this[18])r+=((this[18]==this.color)?1:-1)*25*gene[0];
        else if(this[27]==this.color)r-=15*gene[1];

        if(this[81])r+=((this[81]==this.color)?1:-1)*25*gene[0];
        else if(this[72]==this.color)r-=15*gene[1];

        if(this[88]){r+=((this[88]==this.color)?1:-1)*25*gene[0];}
        else if(this[77]==this.color)r-=15*gene[1];

        //var color = this.color;
        var stableDiscs=stableProto.slice();
        
        var queue = [];

        if(this[11]!=0) queue.push([11,this[11]]);
        if(this[18]!=0) queue.push([18,this[18]]);
        if(this[81]!=0) queue.push([81,this[81]]);
        if(this[88]!=0) queue.push([88,this[88]]);
        while(queue.length)
        {
            var position = queue[0][0];
            var c = queue[0][1];
            queue.shift();
            //if(stableDiscs[position]==0 || stableDiscs[position]==3) continue;
            stableDiscs[position] = c;
            if( (stableDiscs[position-10]==3 || stableDiscs[position+10]==3  || stableDiscs[position-10] == c || stableDiscs[position+10] == c) &&
                (stableDiscs[position-1]==3 || stableDiscs[position+1]==3  || stableDiscs[position-1] == c || stableDiscs[position+1] == c) &&
                (stableDiscs[position-11]==3 || stableDiscs[position+11]==3  || stableDiscs[position-11] == c || stableDiscs[position+11] == c) &&
                (stableDiscs[position-9]==3 || stableDiscs[position+9]==3  || stableDiscs[position-9] == c || stableDiscs[position+9] == c) )
            {
                stableDiscs[position]=c;
                r += ((c==this.color)?1:-1)*7*gene[2];
                for(var i = 0;i <directions.length ; i++)
                    if(stableDiscs[directions[i]+position]==0 && this[directions[i]+position]==c)
                        queue.push([directions[i]+position,c]);
            }
        }        
        
        
        return r;
    }
    this.toLocalString=function(depth)
    {
        var r="";
        if(!depth)depth=0;
        
        for(var y=1;y<=8;y++)
        {
            for(var x=1;x<=8;x++)
            {
                if(this[y*10+x]!=0)r+=(this[y*10+x]==1?"*":"o")+" ";
                else 
                {
                    var tmp=this.move(x,y,this.color);
                    if(tmp)
                    {
                        var tmp2=-tmp.search(-Infinity,Infinity,depth);

                        if(tmp2<0||tmp2>9)r+=tmp2;
                        else r+=" "+tmp2;
                    }
                    else r+="X ";
                }                 
            }
            r+="\n";
        }
        return r+this.exact();
    }
    this.computer=function(depth,exactDepth){
        if(!depth)depth=0;
        if(!exactDepth)exactDepth=depth;
        var r=[];
        var max=-Infinity;
        for(var y=1;y<=8;y++)
        {
            for(var x=1;x<=8;x++)
            {
                if(this[y*10+x])continue;
                else 
                {
                    var tmp=this.move(x,y,this.color);
                    if(!tmp)continue;
                    if(this.moves+exactDepth>=60)
                    {
                        var v=-tmp.exactSearch(-Infinity,Infinity);
                        //alert([x,y]+":"+v);
                    }
                    else if( (x==2||x==7) && (y==2||y==7) )
                        var v=-tmp.search(-Infinity,Infinity,depth+1);
                    else
                        var v=-tmp.search(-Infinity,Infinity,depth);
                    if(v<max)continue;
                    if(v>max){
                        r=[[x,y]];max=v;
                    }
                    else r.push([x,y]);
                }                 
            }
        }
        var tmp=Math.floor(Math.random()*r.length);
        return r[tmp];
    }
    this.search=function(alpha,beta,depth,pass){
        if(depth==0)return this.calculate();        
        var canmove=false;
        for(var y=1;y<=8;y++)
        {
            for(var x=1;x<=8;x++)
            {
                if(this[y*10+x]!=0)r+=(this[y*10+x]==1?"*":"o")+" ";
                else 
                {
                    var tmp=this.move(x,y,this.color);
                    if(!tmp)continue;
                    canmove=true;
                    var r=-tmp.search(-beta,-alpha,depth-1);
                    //if(depth==4)WScript.echo(r);
                    if(r>=alpha)alpha=r;
                    if(alpha>beta)return Infinity;
                }
            }
        }
        if(canmove)return alpha;

                if(pass) return this.exact();
        this.color=3-this.color;
        return -this.search(-beta,-alpha,depth-1,true);
    }
    this.exactSearch=function(alpha,beta,pass){
        if(this.moves==60)return this.exact();
        var canmove=false;
        for(var y=1;y<=8;y++)
        {
            for(var x=1;x<=8;x++)
            {
                if(this[y*10+x]!=0);//r+=(this[y*10+x]==1?"*":"o")+" ";
                else 
                {
                    var tmp=this.move(x,y,this.color);
                    if(!tmp)continue;
                    canmove=true;
                    var r=-tmp.exactSearch(-beta,-alpha);
                    if(r>=alpha)alpha=r;
                    if(alpha>beta)return Infinity;
                }
            }
        }

        if(canmove)return alpha;
        if(pass)return this.exact();
        this.color=3-this.color;
        return -this.exactSearch(-beta,-alpha,true);
    }

    this.move=function(x,y)
    {
        var pattern=this.clone();
        pattern.color=3-this.color;
        pattern.divergence=-pattern.divergence;
        pattern.moves++;
        var canmove;
        canmove=false;
        if(pattern[10*y+x]!=0)return null;
        for(var i=0;i<8;i++)
        {
            var p=10*y+x+directions[i];
            if(pattern[p]==3-this.color)
                while(pattern[p]!=0)
                {
                    p+=directions[i];            
                    if(pattern[p]==this.color)
                    {
                        canmove=true;
                        
                        while((p+=-directions[i])!=10*y+x)
                        {                            
                            pattern[p]=this.color;
                            //alert(p);
                            for(var d=0;d<8;d++)
                            {                                
                                if(!pattern[p+directions[d]]&&p+directions[d]>10&&p+directions[d]<89&&(p+directions[d])%10!=0&&(p+directions[d])!=9)pattern.divergence++;
                            }
                        }
                        break;
                    }
                }
        }
        if(canmove){pattern[10*y+x]=this.color;return pattern;}
        else return null;
    }
}
//pattern.prototype = emptyboard;
//WScript.echo(new pattern().move(5,6).move(6,4).move(4,3).move(3,4).toLocalString(3));
//WScript.echo(new pattern().move(5,6).search(-Infinity,Infinity,2));


}()