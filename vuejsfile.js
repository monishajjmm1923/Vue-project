
//databinding

new Vue({
    el:'#data',
    data:{ message:''}
});



//event dispatcher -component


window.Event = new Vue();

Vue.component('coupon2', {

    template: `<input placeholder="Enter u r code custom event" @blur="onCouponApplied" >`,

    methods: {
 
        onCouponApplied() {

            Event.$emit('applied');
        }
    }

});

new Vue({

    el: '#communication-wrap2',

    data: {

        couponApplied: false
    },

    created() {
        Event.$on('applied', () => alert('Offer applied'));
    }

});



// <!-- Program computed properties - reverse, date-->

var reversetext = new Vue({

	el: '#timereverse-wrap',
	data: {
		message: 'Hello, How are you  computed properties'
	},

	computed: {
		reversedMessage() {
			return this.message.split('').reverse().join('');
		}
	}

});



//list
var app = new Vue({
      el: '#recipe-add',
      data: {
             recipes: []
            }
});
document.querySelector('#button').addEventListener('click', () => {
let recipe = document.querySelector('#input1');
app.recipes.push(recipe.value);
recipe.value = '';
});
//class binding


var hover = new Vue({
    el: '#offer',
    data: {
        title: 'order now'
    }
});



var hover1 = new Vue({
    el: '#Indian-menu',
    data: {
        title: 'Indian Recipes'
    }
});
Vue.component('task-slot',{
    template:'<li><slot></slot></li>'
});
new Vue({
    el:'#recipe-tasks'
});

var hover2= new Vue({
    el: '#Chinese-menu',
    data: {
        title: 'Chinese Recipes'
    }
});
Vue.component('task-slot',{
    template:'<li><slot></slot></li>'
});
new Vue({
    el:'#recipe-task1'
});

     
      
var off = new Vue({
    
        el: '#new',
        data: {
            isLoading: false
        },
        
        methods: {
            toggleClass(){
                this.isLoading = true;
            }
        }
    
    });



//message component

Vue.component('message', {
        props: ['title', 'body'],
        data() {
            return {
                isVisible: true
            };
        },
        template: `
            <article class="message" v-show="isVisible">
                <div class="message-header">
                    {{title}}
                    <button type="button" @click="hideModal">x</button>
                </div>
                <div class="message-body">
                    {{body}}
                </div>
            </article>
        `,
        methods: {
            hideModal() {
                this.isVisible = false;
            }
        }
    });
    new Vue({
        el: '#message-wrap'
    });


//tabs

Vue.component('tabs',{

    template: `
        <div>
            <div class="tabs">
                <ul class="tabnew">
                    <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
                    <a :href="tab.href" @click="selectTab(tab)" class="link">{{ tab.name }}</a></li>
                </ul>
            </div>

            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,

    data(){
        return {tabs: [] };
    },
    created() {

        this.tabs = this.$children;
    },
    methods: {
        selectTab(selectedTab){
            this.tabs.forEach(tab => {           
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
});

// Child Element Component

Vue.component('tab',{
    template: `
                <div v-show="isActive"><slot></slot></div>
    `,
    props:{
        name: {required:true},
        selected: { default: false }
    },
    data() {
        return{
            isActive: false
        };
    },
    mounted() {
        this.isActive = this.selected;
    },
    computed: {
        href(){
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    }
});
new Vue({
        el: '#tab-wrap'
});



//modal


Vue.component('modal',{
    template:`
            <div class="modal is-active">
            <div class="modal-background"style="background-image: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(images/indianfood.jpg);background-size:cover"></div>
            <div class="modal-content">
            <div class="box"style="border:2px solid red;">
                <p style=" background:white;color:black">
                    We are serving heathly and tasty food for the past 4 years,We are stepping into our 5th year.So we are conducting "Foodie" competition
                </p>
            </div>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
            </div>
        `
});
new Vue({
    el:'#modal-wrap',
    data: {
        showModal: false
    }
});


//single elementFromPoint
Vue.component('progress-view', {
    data() {
        return {
            completionRate: 2
        };
    }
});

new Vue({

    el:'#singleusecomponents-wrap'

});
