// JellySoundInstace sýnir hve oft kóðin reynir að spila lagið þegar ýtt er á takka
var JellySoundInstace = 0;
var JellySound = function( audiofile )
    {

    //hve mörg hljóð koma í einum smelli
    var overlapMax = 1;



    var tracks = new Array();
    var soundID = "jellysound" + JellySoundInstace++;
    var track = 0;


    this.load = function( audiofile )
        {
        var i;
// loop fyrir hvemörg hljóð í einum smelli.
        for ( i=0; i<overlapMax; i++ )
            {
            var object = null;

            if ( ieVersion(8) )
                {
                object = document.createElement('div');

                var iesound = '';
                iesound = iesound + '<object id="'+soundID+'track'+i+'" type="audio/x-wav" data="'+audiofile+'" width="200" height="16">';
                iesound = iesound + '<param name="src" value="'+audiofile+'" />';
                iesound = iesound + '<param name="volume" value="2" />';
                iesound = iesound + '<param name="autoplay" value="false" />';
                iesound = iesound + '<param name="autostart" value="0" />';
                iesound = iesound + '<param name="pluginurl" value="http://www.apple.com/quicktime/download/" />';
                iesound = iesound + '</object>';

                object.id = soundID+'track'+i+'div';
                object.innerHTML = iesound;
                object.style.visibility = 'hidden';
                object.style.position = 'absolute';
                object.style.left = '0px';
                object.style.top = '0px';
                }
            else
                {
                object = document.createElement('audio');
                object.setAttribute('id',soundID+'track'+i);
                object.setAttribute('src',audiofile);
                }

            document.body.appendChild( object );

            var newsound = document.getElementById(soundID+'track'+i);



            // volume á öll hljóð
            newsound.volume = 1;

            tracks.push( newsound );
            }
        }


    this.play = function()
        {
        if ( tracks.length==0 )
            return;

        if ( ieVersion(8) )
            {
            tracks[track].Play();
            track++;
            track%=tracks.length;
            return;
            }

        tracks[track].play();
        track++;
        track%=tracks.length;
        }

    this.load( audiofile );

    return this;
    }

function ieVersion( iecheck )
    {

    if ( !(/MSIE (\d+\.\d+);/.test(navigator.userAgent)) )
        return 0;

    var ieversion=new Number(RegExp.$1) // capture x.x portion and store as a number

    return (ieversion <= iecheck);
    }

// tenging við soundfiles og play
var takeoff = new JellySound( "./Sound/power_up.wav" );
var shoot = new JellySound("./Sound/bombinv.wav");
var shoot_from_spaceship = new JellySound("./Sound/shootfromspaceship.wav");
var explotion = new JellySound("./Sound/explosion.wav");
//var explotion2 = new JellySound("./Sound/explotion2.wav");
var invaderdown = new JellySound("./Sound/invadersdown.mp3");
//var fastinvader1 = new JellySound("./Sound/fastinvader2.wav");
//var fastinvader2 = new JellySound("./Sound/fastinvader3.wav");
var fastinvader3 = new JellySound("./Sound/fastinvader4.wav");
//var mothership = new JellySound("./Sound/mothership.wav");
