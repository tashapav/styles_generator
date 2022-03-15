import $ from 'jquery'
import '../src/main.css'

let linearGradient

function cssStyles({
    font_size,
    offset_x,
    offset_y,
    blur,
    opacity,
    color,
    text_color
}) {
    let red16 = color[1] + '' + color[2]
    let green16 = color[3] + '' + color[4]
    let blue16 = color[5] + '' + color[6]

    let red10 = parseInt(red16, 16)
    let green10 = parseInt(green16, 16)
    let blue10 = parseInt(blue16, 16)

    let cssColor = 'rgba('+ red10 + ', ' + green10 + ', ' + blue10 + ', ' + opacity + ')'
    let cssSt = offset_x + 'px ' + offset_y + 'px ' + blur + 'px ' + cssColor

    $('h1').css('text-shadow', cssSt)


    if ($('#gradient').is(':checked')) {
        makeGradient()
        $('#result').val('font-size: ' + font_size + 'px;'+ '\nbackground: ' + linearGradient + ';\n-webkit-background-clip: text' + ';\n-webkit-text-fill-color: transparent' + ';\ntext-shadow: ' + cssSt + ';')
    } else {
        $('h1').css('color', text_color)
        $('h1').css({
            'background': '',
            '-webkit-background-clip': '',
            '-webkit-text-fill-color': ''
        })

        $('#result').val('font-size: ' + font_size + 'px;'+ '\ncolor: ' + text_color + ';\ntext-shadow: ' + cssSt + ';')
    }
}

function makeGradient() {
    let corner = $('#corner').val()
    let startColor = $('#color-box1').val()
    let endColor = $('#color-box2').val()

    linearGradient = 'linear-gradient(' + corner + 'deg, ' + startColor + ', ' + endColor + ')'

    $('h1').css({
        'background': linearGradient,
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
    })
}

function gradientTick() {
    if ($('#gradient').is(':checked')) {
        $('.hidden-gradient').css('visibility', 'visible')
    } else {
        $('.hidden-gradient').css('visibility', 'hidden')
    }
}

function change() {
    let font_size = $('#font-size').val()
    let offset_x = $('#offset_x').val()
    let offset_y = $('#offset_y').val()
    let blur = $('#blur').val()
    let opacity = $('#opacity').val()
    let color = $('#color-box').val()
    let text_color = $('#text-color').val()

    gradientTick()

    $('h1').css('font-size', font_size + 'px')
    cssStyles({
        font_size: font_size,
        offset_x: offset_x,
        offset_y: offset_y,
        blur: blur,
        opacity: opacity,
        color: color,
        text_color: text_color
    })
}

function changeText() {
    let mainText = $('#main-text').val()
    
    if (mainText ==='') {
        $('#tryOnText').text('Text generator')
    } else {
        $('#tryOnText').text(mainText)
        $('#main-text').val('')
    }
}

cssStyles({
    font_size: 50,
    offset_x: 4,
    offset_y: -1,
    blur: 5,
    opacity: 1,
    color: '#00ff00',
    text_color: '#000000'
})

$(document).on('input change', 'input', change)
$('.btn-text').on('click', changeText)