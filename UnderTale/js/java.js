//Index Flowey Script
//
//function floweySet(type) {
//	var sprite = document.getElementById('flowey');
//	switch (type) {
//			
//    case 'Windows':
//        sprite.style["background"] = 'transparent url(../images/floweywinkBIG.png) no-repeat';
//        break;
//			
//    case 'Mac': 
//		sprite.style["background"] = 'transparent url(../images/floweyhappyBIG.png) no-repeat';
//        break;
//			
//    case 'Twitter': 
//        sprite.style["background"] = 'transparent url(../images/floweycoolBIG.png) no-repeat';
//        break;
//			
//    case 'Tumblr': 
//        sprite.style["background"] = 'transparent url(../images/floweycuteBIG.png) no-repeat';
//        break;
//			
//    case 'Store': 
//		sprite.style["background"] = 'transparent url(../images/floweymoneyeyesBIG.png) no-repeat';
//		break;
//			
//	case 'KS': 
//		sprite.style["background"] = 'transparent url(../images/floweymoneyeyesBIG2.png) no-repeat';
//        break;
//			
//    default:
//		sprite.style["background"] = 'transparent url(../images/floweyBIG.png) no-repeat';
//		break;
//	}
//}

////Popup User Script
//
//function blurBehindPopup() {
//    if (blurredElements.length === 0) {
//        'use strict';
//        for (var i=0; i < document.body.children.length; i++) {
//            var element = document.body.children[i];
//            if(element.id && element.id != 'fullscreen-popup' && element.isVisible == true) {
//                classie.addClass( element, 'blur-element' );
//                blurredElements.push(element);
//            }
//        }
//    } else {
//        for(var i=0; i < blurredElements.length; i++) {
//            classie.addClass( blurredElements[i], 'blur-element' );
//        }
//    }
//}
//function unblurBehindPopup() {
//    for(var i=0; i < blurredElements.length; i++) {
//        classie.removeClass( blurredElements[i], 'blur-element' );
//    }
//}