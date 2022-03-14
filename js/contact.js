window.addEventListener('load', function() {

    //方法一
    // HTMLに<tr id="message"></tr> を作っておく
    // 但し、HTML元の構造を変更させ複雑になってしまうと思う、
    // コードだけ正しいかどうかを教えてください。
    // const email = document.querySelector('#email');
    // const email_confirm = document.querySelector('#email_confirm');
    // const message = document.querySelector('#message');

    // email_confirm.addEventListener('input', function(ev) {
    //     ev.preventDefault();
    //     if (this.value !== email.value) {
    //         this.className = 'error';
    //         message.innerHTML = '<p>Eメールが一致しません</p>';
    //     } else {
    //         this.className = '';
    //         message.removeChild(message.children[0]);
    //     }
    // });


    //方法二
    //JSでnodeを操作
    const email = document.querySelector('#email');
    const email_confirm = document.querySelector('#email_confirm');
    const tbody = document.querySelector('table').querySelector('tbody');
    const contact_content = document.querySelector('.contact_content');

    email_confirm.addEventListener('input', function() {
        if (this.value !== email.value) {
            this.className = 'error';
            const message = document.createElement('tr');
            // inputイベントを繰り返して発生させないように
            // createElementで作ったnodeの存在するかどうかを判断してから、父要素に追加
            message.setAttribute('id', 'message');
            if (document.getElementById('message')) {
                return false;
            } else {
                tbody.insertBefore(message, contact_content);
                message.innerHTML = '<p>Eメールが一致しません</p>';
            };
        } else {
            this.className = '';
            // tbody.removeChild(tbody.children[3]);
            // 前はsetAttributeを使ったので、
            // inputにいちから入力する場合、エラーメッセージを提示する要素は必ず作られるが、
            // もしいちから入力せず、コピー＆ペーストの場合もあるかもしれないので、判断するようにした
            if (document.getElementById('message')) {
                const message = document.getElementById('message');
                tbody.removeChild(message);
            };
        };
    });


})