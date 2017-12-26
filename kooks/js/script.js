// External Files:
// https://api.html5media.info/1.1.8/html5media.min.js (enables <video> and <audio> tags in all major browsers)
// https://cdn.plyr.io/2.0.13/plyr.js


// HTML5 audio player + playlist controls...
// Inspiration: http://jonhall.info/how_to/create_a_playlist_for_html5_audio
// Mythium Archive: https://archive.org/details/mythium/
jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var index = 0,
            playing = false,
            mediaPath = 'music/',
            extension = '',
            tracks = [{
                "track": 1,
                "name": "The  Kooks - Mr Maker",
                "length": "2:54",
                "file": "Mr maker"
                
            }, {
                
                "track": 2,
                "name": "The Kooks -  Be Who You Are ",
                "length": "3:54",
                "file": "Be who you are"
            }, {
                "track": 3,
                "name": "The Kooks  -  Naive",
                "length": "3:15",
                "file": "Naive"
            }, {
                "track": 4,
                "name": "The Kooks  -  She Moves On Her Own Way",
                "length": "2:57",
                "file": "moves"
            }, {
                "track": 5,
                "name": "The Kooks - Always Where I Need To Be",
                "length": "2:43",
                "file": "always"
            }, {
                "track": 6,
                "name": "The Kooks - Shine On",
                "length": "2:76",
                "file": "shine on"
            }, {
                "track": 7,
                "name": "The Kooks - Junk Of The Heart (Happy)",
                "length": "3:00",
                "file": "junk"
            }, {
                "track": 8,
                "name": "The Kooks - How'd You Like That",
                "length": "2:90",
                "file": "like that"
            }, {
                "track": 9,
                "name": "The Kooks - You Don't Love Me",
                "length": "2:59",
                "file": "dont love"
            }, {
                "track": 10,
                "name": "The Kooks - Bad Habit",
                "length": "3:30",
                "file": "habit"
            }],
            
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackLength = value.length;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                } else {
                    trackNumber = '' + trackNumber;
                }
                $('#plList').append('<li><div class="plItem"><div class="plNum">' + trackNumber + '.</div><div class="plTitle">' + trackName + '</div><div class="plLength">' + trackLength + '</div></div></li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').bind('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).bind('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).bind('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').click(function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').click(function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').click(function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    }
});
$("#homeLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 500);
});
$("#bandLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#band").offset().top
    }, 500);
});
$("#photosLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#potos").offset().top
    }, 500);
});
$("#songsLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#songs").offset().top
    }, 500);
});
$("#tourLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#tour").offset().top
    }, 500);
});
$("#contactLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 500);
});
//initialize plyr
// plyr.setup($('#audio1'), {});
jQuery(document).ready(function() {
    jQuery('.post').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated flipInX',
        offset: 100
       });

});
jQuery(document).ready(function() {
    jQuery('.post1').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInUp',
        offset: 100
       });

});
jQuery(document).ready(function() {
    jQuery('.post2').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated  bounceInUp',
        offset: 100
       });
});
jQuery(document).ready(function() {
    jQuery('.post3').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated lightSpeedIn',
        offset: 100
       });
});
jQuery(document).ready(function() {
    jQuery('.post4').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated lightSpeedIn',
        offset: 100
       });
});
jQuery(document).ready(function() {
    jQuery('.post5').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInUp',
        offset: 100
       });
});
