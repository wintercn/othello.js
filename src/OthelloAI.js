
var OthelloAI = {};

new function(){

OthelloAI.Pattern= pattern;

var directions=[-11,-10,-9,-1,1,9,10,11];

var openings = {"count":43150,"f5":{"count":43150,"f6":{"count":18345,"e6":{"count":18144,"d6":{"count":9590,"e7":{"count":2850,"g5":{"count":1661,"c5":{"count":994,"c6":{"count":206,"e3":{"count":172}},"f4":{"count":104,"c4":{"count":104}},"f7":{"count":516,"c6":{"count":120,"f4":{"count":110}},"f4":{"count":172,"d3":{"count":166}},"c4":{"count":210,"e3":{"count":144,"f4":{"count":139,"f3":{"count":100}}}}},"d7":{"count":113}},"g4":{"count":171},"g6":{"count":450,"f4":{"count":196}}},"f4":{"count":742,"g5":{"count":362,"d7":{"count":224,"c6":{"count":207,"e8":{"count":182,"c5":{"count":166}}}}}},"f7":{"count":283,"d7":{"count":188,"g5":{"count":101}}},"f3":{"count":111}},"c7":{"count":121},"f7":{"count":1829,"f4":{"count":833,"c5":{"count":443,"c6":{"count":359,"d7":{"count":350,"e7":{"count":259,"c4":{"count":222,"b5":{"count":204,"e3":{"count":142}}}}}}},"f3":{"count":175,"g5":{"count":135,"h6":{"count":120}}},"d7":{"count":189,"g6":{"count":107}}},"e3":{"count":571,"d7":{"count":452,"e7":{"count":377,"c6":{"count":137,"c5":{"count":132}},"d8":{"count":109}}},"c6":{"count":107}},"f3":{"count":316,"e7":{"count":112,"f4":{"count":109}},"c6":{"count":121}}},"c3":{"count":737,"f4":{"count":356,"c6":{"count":329,"e3":{"count":132},"d3":{"count":133,"e3":{"count":133,"d2":{"count":113}}}}},"g4":{"count":242,"c6":{"count":173,"f4":{"count":165,"e7":{"count":130}}}}},"c5":{"count":3126,"e3":{"count":1711,"d3":{"count":888,"g5":{"count":356,"f3":{"count":301,"b5":{"count":214,"c6":{"count":204,"b6":{"count":147,"e7":{"count":120,"d7":{"count":114}}}}}}},"c4":{"count":225,"c6":{"count":106}},"f4":{"count":217}},"f3":{"count":269,"f4":{"count":172,"g5":{"count":161}}},"e7":{"count":489,"c7":{"count":224,"d7":{"count":129,"c6":{"count":124}}},"c4":{"count":148}}},"f4":{"count":1043,"d3":{"count":254,"c6":{"count":136,"c7":{"count":101}}},"d7":{"count":383,"c4":{"count":207,"c3":{"count":177,"c8":{"count":100}}}},"f3":{"count":155,"e3":{"count":125,"g5":{"count":120}}}},"g4":{"count":311,"d7":{"count":157,"c6":{"count":112}}}},"c4":{"count":240,"f4":{"count":157,"c6":{"count":102}}},"d7":{"count":424,"g5":{"count":345,"g6":{"count":298,"e7":{"count":173}}}},"c6":{"count":223,"e3":{"count":180}}},"f4":{"count":8554,"g5":{"count":2524,"e7":{"count":1683,"e3":{"count":991,"g6":{"count":575,"d3":{"count":192,"c5":{"count":145,"d6":{"count":143,"c6":{"count":137,"f7":{"count":114}}}}},"d6":{"count":226,"c4":{"count":216}},"f3":{"count":108,"d6":{"count":106}}},"d6":{"count":135,"d3":{"count":134}},"f3":{"count":166,"c5":{"count":119}}},"f7":{"count":466,"d6":{"count":128}},"d7":{"count":161}},"d6":{"count":532,"e7":{"count":267,"g4":{"count":190,"f3":{"count":180,"h5":{"count":160,"e3":{"count":153}}}}}},"g6":{"count":191,"g4":{"count":128}}},"e3":{"count":2986,"c5":{"count":1786,"g5":{"count":398,"g3":{"count":208,"g4":{"count":118,"f3":{"count":114}}}},"c4":{"count":890,"d6":{"count":138},"e7":{"count":338,"c6":{"count":272,"e2":{"count":147,"f3":{"count":140,"f2":{"count":103}}},"d2":{"count":116}}},"d3":{"count":305,"f3":{"count":142,"e2":{"count":131}},"c3":{"count":100}}},"c6":{"count":427,"d6":{"count":230,"e7":{"count":204}},"d3":{"count":172,"f3":{"count":127}}}},"d6":{"count":911,"c4":{"count":185},"g4":{"count":294,"d3":{"count":188,"c3":{"count":159,"h3":{"count":111,"c4":{"count":109,"g3":{"count":101}}}}}},"c6":{"count":209,"c5":{"count":158,"e7":{"count":155,"d7":{"count":103,"c3":{"count":103}}}}},"e7":{"count":108}},"d7":{"count":229,"g4":{"count":120}}},"g6":{"count":1557,"c5":{"count":509,"g4":{"count":392,"g5":{"count":357,"f3":{"count":135,"e3":{"count":132,"c4":{"count":108,"g3":{"count":107,"h5":{"count":107}}}}},"e3":{"count":101}}},"f3":{"count":111}},"c6":{"count":235},"d6":{"count":736,"e3":{"count":432,"f3":{"count":289,"g4":{"count":280,"g5":{"count":100},"d3":{"count":170,"g3":{"count":152}}}},"d3":{"count":100}},"g4":{"count":171}}},"c3":{"count":589,"d6":{"count":378,"f3":{"count":353,"c5":{"count":241,"g4":{"count":184,"g3":{"count":143}}}}},"d7":{"count":109}},"d3":{"count":174,"d6":{"count":134}},"g3":{"count":151,"d6":{"count":117}},"g4":{"count":318,"e7":{"count":258,"f7":{"count":204,"g5":{"count":124}}}},"f3":{"count":213,"c5":{"count":189}}}}},"d6":{"count":24197,"c3":{"count":14503,"d3":{"count":13480,"c4":{"count":12841,"f4":{"count":12292,"f6":{"count":8258,"b4":{"count":570,"f3":{"count":389,"e6":{"count":377,"e3":{"count":317,"g5":{"count":252,"g6":{"count":223,"g4":{"count":204,"h4":{"count":189,"h5":{"count":188,"h3":{"count":181,"f7":{"count":169}}}}}}}}}}},"g5":{"count":3257,"e6":{"count":2421,"f7":{"count":712,"d7":{"count":474,"c5":{"count":343,"g3":{"count":324,"b5":{"count":123},"e3":{"count":145}}}}},"c5":{"count":502,"f3":{"count":475,"b5":{"count":153},"e3":{"count":154,"g4":{"count":153}},"f7":{"count":132,"e7":{"count":104}}}},"d7":{"count":1055,"e3":{"count":823,"c5":{"count":671,"f3":{"count":452,"e7":{"count":401,"h6":{"count":122},"b6":{"count":107},"h5":{"count":164,"e2":{"count":130}}}},"f7":{"count":141,"e7":{"count":110}}}}},"e7":{"count":102}},"c6":{"count":116,"e3":{"count":110}},"e3":{"count":617,"f3":{"count":595,"g6":{"count":165,"e2":{"count":138}},"g4":{"count":285,"h3":{"count":164}}}}},"f3":{"count":4359,"e6":{"count":3863,"e7":{"count":3782,"d7":{"count":2146,"g6":{"count":1800,"f8":{"count":1073,"c5":{"count":221,"c6":{"count":211,"c7":{"count":101}}},"f7":{"count":842,"g5":{"count":662,"g4":{"count":178},"h6":{"count":463,"h3":{"count":345,"h5":{"count":186,"h7":{"count":186,"c5":{"count":178,"b4":{"count":146,"e8":{"count":131,"d8":{"count":131,"b5":{"count":112}}}}}}}}}},"h6":{"count":174,"c5":{"count":123}}}},"d8":{"count":271,"c5":{"count":205,"c6":{"count":203,"c7":{"count":177}}}},"g5":{"count":415,"c5":{"count":294,"b6":{"count":220,"c6":{"count":208,"f8":{"count":146,"e8":{"count":134,"f7":{"count":124,"h6":{"count":113}}}}}}}}},"c5":{"count":230,"c6":{"count":193,"g6":{"count":147,"f8":{"count":124}}}}},"c6":{"count":489,"g5":{"count":131},"g6":{"count":288,"f8":{"count":190,"f7":{"count":127}}}},"f7":{"count":1110,"c5":{"count":961,"b6":{"count":826,"g6":{"count":506,"e3":{"count":272,"e2":{"count":237,"g4":{"count":110}}},"f8":{"count":159}},"b5":{"count":105},"b4":{"count":185}}}}}},"e3":{"count":110},"g4":{"count":340,"g5":{"count":176,"e3":{"count":166}},"g3":{"count":152,"e6":{"count":132,"b3":{"count":107}}}}}},"e6":{"count":704,"f6":{"count":268,"e3":{"count":261,"c5":{"count":257,"c6":{"count":145}}}},"b3":{"count":402,"e2":{"count":313,"c5":{"count":200,"c6":{"count":109,"e3":{"count":107,"d2":{"count":103}}}}}}},"c5":{"count":2889,"b5":{"count":125},"b3":{"count":2282,"c2":{"count":1852,"e3":{"count":606,"d2":{"count":598,"c6":{"count":505,"b4":{"count":423,"a3":{"count":272,"g3":{"count":125}}}}}},"e6":{"count":732,"c6":{"count":549,"b4":{"count":458,"b5":{"count":406,"d2":{"count":362,"e3":{"count":291,"a6":{"count":287}}}}}},"b4":{"count":158,"f3":{"count":129,"e3":{"count":104,"e2":{"count":104}}}}},"b4":{"count":398,"c6":{"count":114,"d2":{"count":107}},"e3":{"count":281,"e6":{"count":211,"c6":{"count":167,"f6":{"count":120}}}}}},"e2":{"count":275,"e3":{"count":148,"c2":{"count":119}},"c6":{"count":113}},"d2":{"count":104}},"b4":{"count":456,"c6":{"count":110,"e6":{"count":101}},"b3":{"count":289,"c2":{"count":149,"d7":{"count":121}}}}},"e3":{"count":337,"f3":{"count":303,"g4":{"count":159,"f6":{"count":135}},"e6":{"count":121,"f6":{"count":105}}}}},"b3":{"count":277,"c6":{"count":227,"f4":{"count":142,"e6":{"count":140}}}},"b5":{"count":175,"b4":{"count":136,"f4":{"count":117}}}},"c6":{"count":406,"f4":{"count":382,"e6":{"count":311,"c5":{"count":120,"b4":{"count":113}}}}},"c5":{"count":168,"f4":{"count":157,"f3":{"count":115}}}},"f4":{"count":651,"f6":{"count":562,"g5":{"count":160},"f3":{"count":125,"d3":{"count":112}},"d3":{"count":128},"c4":{"count":135}}},"g5":{"count":270,"c6":{"count":215}},"f3":{"count":102}},"c5":{"count":4415,"f4":{"count":4334,"e3":{"count":3199,"c6":{"count":2805,"f3":{"count":112},"d3":{"count":2004,"f6":{"count":1686,"e6":{"count":1538,"d7":{"count":1415,"g3":{"count":775,"c4":{"count":762,"g5":{"count":222,"c3":{"count":221,"f7":{"count":145}}},"b4":{"count":443,"b3":{"count":368,"g5":{"count":265,"c3":{"count":244,"a4":{"count":166,"a3":{"count":165,"b6":{"count":165,"a6":{"count":148,"f7":{"count":136,"g6":{"count":124}}}}}}}}}}}},"e7":{"count":254,"c7":{"count":140,"c4":{"count":139}}},"g4":{"count":367,"c4":{"count":307,"g5":{"count":244,"c3":{"count":243,"f7":{"count":201,"d2":{"count":169}}}}}}}}},"g5":{"count":141},"f3":{"count":126,"e6":{"count":107}}},"e6":{"count":548,"f6":{"count":433,"d7":{"count":216,"c7":{"count":145,"e7":{"count":108,"e8":{"count":104}}}},"g4":{"count":122}}}},"c4":{"count":304,"e6":{"count":201,"f6":{"count":181,"d3":{"count":166,"c6":{"count":161}}}}}},"d3":{"count":630,"e3":{"count":335,"g4":{"count":306,"g5":{"count":255,"e6":{"count":147,"c4":{"count":105}}}}},"c4":{"count":229,"c3":{"count":149,"c6":{"count":130,"e6":{"count":107,"b5":{"count":101}}}}}},"d7":{"count":261,"f6":{"count":200,"d3":{"count":193,"c3":{"count":168,"b3":{"count":101}}}}},"e7":{"count":101},"f3":{"count":141}}},"c4":{"count":4780,"d3":{"count":4274,"c3":{"count":2608,"f4":{"count":2524,"c5":{"count":1098,"b3":{"count":867,"c2":{"count":668,"e6":{"count":304,"c6":{"count":227,"b4":{"count":200,"b5":{"count":198,"d2":{"count":181,"e3":{"count":161,"a6":{"count":157}}}}}}},"b4":{"count":167},"e3":{"count":183,"d2":{"count":180,"c6":{"count":150,"b4":{"count":142}}}}},"e2":{"count":130}},"b4":{"count":196}},"f6":{"count":1166,"f3":{"count":528,"e6":{"count":433,"e7":{"count":427,"f7":{"count":145,"c5":{"count":126}},"d7":{"count":201,"g6":{"count":176}}}}},"b4":{"count":142,"f3":{"count":122,"e6":{"count":122,"e3":{"count":118,"g5":{"count":100}}}}},"g5":{"count":487,"e6":{"count":316,"d7":{"count":117},"f7":{"count":127}}}},"e3":{"count":140,"f3":{"count":127}},"e6":{"count":100}}},"e6":{"count":709,"f4":{"count":654,"e3":{"count":608,"f3":{"count":580,"g4":{"count":184,"g3":{"count":117}},"c6":{"count":264,"f6":{"count":213,"g5":{"count":213,"g6":{"count":141,"e7":{"count":120}}}}},"c3":{"count":109,"c5":{"count":104}}}}}},"c5":{"count":821,"f4":{"count":781,"e3":{"count":597,"f3":{"count":560,"c2":{"count":349,"c6":{"count":285,"e6":{"count":216,"d2":{"count":203,"g4":{"count":169,"b6":{"count":107}}}}}},"e2":{"count":103}}}}}},"f4":{"count":194,"c5":{"count":142}},"g5":{"count":232,"c6":{"count":120},"f6":{"count":100}}},"c6":{"count":427,"f4":{"count":409,"e6":{"count":368,"g5":{"count":203,"d3":{"count":128,"c4":{"count":116,"e3":{"count":110,"c5":{"count":105}}}}}}}}},"f4":{"count":608,"e3":{"count":545,"f6":{"count":303,"d3":{"count":243,"c5":{"count":113,"d6":{"count":103}}}}}}}}

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
        this.opening = null;
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
        if(this[11])r+=((this[11]==this.color)?1:-1)*35*gene[0];
        else if(this[22]==this.color)r-=25*gene[1];

        if(this[18])r+=((this[18]==this.color)?1:-1)*35*gene[0];
        else if(this[27]==this.color)r-=25*gene[1];

        if(this[81])r+=((this[81]==this.color)?1:-1)*35*gene[0];
        else if(this[72]==this.color)r-=25*gene[1];

        if(this[88]){r+=((this[88]==this.color)?1:-1)*35*gene[0];}
        else if(this[77]==this.color)r-=25*gene[1];

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
                r += ((c==this.color)?1:-1)*5*gene[2];
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
        if(this.opening) {
            var v = 0;
            var rnd = Math.random()*this.opening.count;
            
            for(var p in this.opening) {
                if(p=="count") continue; 
                v += this.opening[p].count;
                if(v > rnd) return [p.charCodeAt(1)-49+1,p.charCodeAt(0)-97+1];
            }
        }
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
        if(this.opening)
            pattern.opening = this.opening[String.fromCharCode(x+97)+(y-1)];
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
    this.opening = openings;

}
//pattern.prototype = emptyboard;
//WScript.echo(new pattern().move(5,6).move(6,4).move(4,3).move(3,4).toLocalString(3));
//WScript.echo(new pattern().move(5,6).search(-Infinity,Infinity,2));


}()