document.addEventListener("DOMContentLoaded", function()  {

	let headTitle = document.querySelector('head');
	let setFavicon = document.createElement('link');
	setFavicon.setAttribute('rel','shortcut icon');
	setFavicon.setAttribute('href','images/earth_rotating.gif');
	headTitle.appendChild(setFavicon);
	
	var title = document.createElement("title");
	title.textContent = "Earth Day";
	headTitle.appendChild(title);

	
	var navigation = document.createElement("div");
	navigation.className = "navigation";
	
	var navigation_list1 = document.createElement("ul");
	var navigation_list2 = document.createElement("ul");
	navigation_list1.className = "list";
	navigation_list2.className = "list";
	
	var know_link = document.createElement("a");
	know_link.className = "know";
	know_link.textContent = "Did you know?";
	know_link.href = "#facts";
	var know = document.createElement("li");
	know.appendChild(know_link);
	
	var celebrate_link = document.createElement("a");
	celebrate_link.className = "celebrate";
	celebrate_link.textContent = "Why celebrate?";
	celebrate_link.href = "#celebrate";
	var celebrate = document.createElement("li");
	celebrate.appendChild(celebrate_link);
	
	var help_link = document.createElement("a");
	help_link.className = "help";
	help_link.textContent = "How to help";
	help_link.href = "#help";
	var help = document.createElement("li");
	help.appendChild(help_link);
	
	var action_link = document.createElement("a");
	action_link.className = "action";
	action_link.textContent = "Take action";
	action_link.href = "#action";
	var action = document.createElement("li");
	action.appendChild(action_link);
	
	var inspiration_link = document.createElement("a");
	inspiration_link.className = "inspiration";
	inspiration_link.textContent = "Inspiration corner";
	inspiration_link.href = "#inspiration";
	var inspiration = document.createElement("li");
	inspiration.appendChild(inspiration_link);
	
	var events_link = document.createElement("a");
	events_link.className = "event";
	events_link.textContent = "Events";
	events_link.href = "#events";
	var events = document.createElement("li");
	events.appendChild(events_link);
	
	var logo = document.createElement("img");
	logo.src = "images/earth_rotating.gif";        
    
	navigation_list1.appendChild(know);
	navigation_list1.appendChild(celebrate);
	navigation_list1.appendChild(help);
	navigation_list2.appendChild(action);
	navigation_list2.appendChild(inspiration);
	navigation_list2.appendChild(events);
	navigation.appendChild(navigation_list1);
	navigation.appendChild(logo);
	navigation.appendChild(navigation_list2);	


	document.body.prepend(navigation);
	
	var image2 = document.createElement("img");
	var imageParent2 = document.getElementsByClassName('facts')[0];
	image2.src = "images/hand-holding-earth.png";            
	imageParent2.appendChild(image2);
	
	var section = document.getElementsByTagName('section')[0]
	var firstArticle = section.getElementsByTagName('article')[0];
	firstArticle.setAttribute("id", "facts");
	
	var secondArticle = section.getElementsByTagName('article')[1];
	secondArticle.setAttribute("id", "celebrate");
	
	var thirdArticle = section.getElementsByTagName('article')[2];
	thirdArticle.setAttribute("id", "help");
		
	var action_call = document.getElementsByClassName('action-call')[0];
	action_call.setAttribute("id", "action");
	
	var testimonial = document.getElementsByClassName('testimonial')[0];
	testimonial.setAttribute("id", "inspiration");
	
	var join_event = document.getElementsByClassName('events')[0];
	join_event.setAttribute("id", "events");
	
	var button_on_top = document.createElement("div");
	document.body.appendChild(button_on_top);
	button_on_top.className = "button-on-top";
	button_on_top.title = "Back to top";
	
	// Button on top
	window.onscroll = function() {
	  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		button_on_top.style.display = "block";
	  } else {
		button_on_top.style.display = "none";
	  }
	};	
	
	button_on_top.onclick = function animateToTop(e) {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

});
