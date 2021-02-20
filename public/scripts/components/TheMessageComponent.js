export default {
    props: ['msg', 'socketid'],
    
    template:
    `
    <article class="new-message" :class="{ 'my-message' : matchedID }">
        <h4>{{msg.message.name}} Says:</h4>
        <p>{{msg.message.content}}</p>
    </article>
    `,

    data: function() {
        return {
            matchedID: this.socketid == this.msg.id
        }
    }
}