window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for( let i = a; i < tabContent.length; i++ ) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    function showTabContent(b) {
        if ( tabContent[b].classList.contains('hide') ) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    
    hideTabContent(0);
    showTabContent(0);

    info.addEventListener('click', function(event) {
        let target = event.target;
        if ( target && target.classList.contains('info-header-tab')) {
            for ( let i = 0; i < tab.length; i++ ) {
                if ( target == tab[i] ) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer
    let deadline = '2019-11-05';

    function getTimeRemaining( endTime ) {
        let t = Date.parse( endTime ) - Date.parse( new Date() ),
            seconds = Math.floor( t / 1000 % 60 ),
            minutes = Math.floor( t / 1000 / 60 % 60 ),
            hours = Math.floor( t / ( 1000 * 60 * 60 ) );
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function setClock( id, endTime ) {
        let timer = document.getElementById( id ),
            hours = timer.querySelector( '.hours' ),
            minutes = timer.querySelector( '.minutes' ),
            seconds = timer.querySelector( '.seconds' );
            let timeInterval = setInterval( updateClock, 1000 );

        function updateClock() {
            let t = getTimeRemaining( endTime );
            hours.textContent = t.hours / 10 >= 1 ? t.hours : `0${t.hours}`;
            minutes.textContent = t.minutes / 10 >= 1 ? t.minutes : `0${t.minutes}`;
            seconds.textContent = t.seconds / 10 >= 1 ? t.seconds : `0${t.seconds}`;

            if( t.total <= 0 ) {
                clearInterval( timeInterval );
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock( 'timer', deadline );

    // Modal window
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    function showModalWindow() {
        this.addEventListener('click', function(){
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    }

    showModalWindow.call(more);

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    let descriptionBtn = document.querySelectorAll('.description-btn');
    descriptionBtn.forEach(function(item) {
        showModalWindow.apply(item);
    })

});