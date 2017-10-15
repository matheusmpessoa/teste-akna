var app = angular.module('app', []);

app.controller('mainCtrl', function($http) {
    var vm = this;
    vm.input = {}

    vm.addBook = function () {
        vm.push({
            name: vm.inputLivro
        });
        vm.inputLivro = null;
    }

    vm.removeBook = function () {
        var index = vm.indexOf(livro);
        vm.splice(index, 1);
    }

    vm.getAllBooks = function () {
        vm.allBooks = {};
        $http.get('http://lab01.akna.com.br/testes/livros.php').success(function (data) {
            console.log(data);
            vm.allBooks = data;
        });
    }
    vm.getAllBooks()


    vm.addTeam = function (objetoAInserir) {
        var objetoNaApi = {
            "titulo": objetoAInserir.title
            , "autor": objetoAInserir.author
            , "preco": objetoAInserir.title
        }
        $http.post('http://lab01.akna.com.br/testes/livros.php', objetoNaApi)
            .success(function (data) {
                console.log(data);
                vm.getAllBooks()
            });
    }
});

app.controller('menuCtrl', function($http){
    var mn = this;

    mn.menu = [
        {title: 'Palmeiras'},
        {title: 'Santos'},
        {title: 'Corinthians'},
        {title: 'São Paulo'},
    ];

    mn.nav = [
        {
            "desc": "Principal",
            "url": "pag_principal.html",
            "sub": [
                {
                    "desc": "Livros",
                    "url": "pag_livros.html",
                    "sub": [
                        {
                            "desc": "Literatura Estrangeira",
                            "url": "pag_literaest.html"
                        },
                        {
                            "desc": "Literatura Nacional",
                            "url": "pag_literanac.html"
                        },
                        {
                            "desc": "Auto-ajuda",
                            "url": "pag_autoajuda.html"
                        },
                        {
                            "desc": "Religião",
                            "url": "pag_religiao.html"
                        }
                    ]
                },
                {
                    "desc": "Eletrodomesticos",
                    "url": "pag_eletro.html",
                    "sub": [
                        {
                            "desc": "Fogão",
                            "url": "pag_fogao.html"
                        },
                        {
                            "desc": "Geladeira",
                            "url": "pag_geladeira.html"
                        }
                    ]
                },
                {
                    "desc": "Jogos",
                    "url": "pag_jogos.html",
                    "sub": [
                        {
                            "desc": "XBOX",
                            "url": "pag_xbox.html"
                        },
                        {
                            "desc": "Playstation",
                            "url": "pag_ps.html",
                            "sub": [
                                {
                                    "desc": "PS2",
                                    "url": "pag_ps2.html"
                                },
                                {
                                    "desc": "PS3",
                                    "url": "pag_ps3.html"
                                },
                                {
                                    "desc": "PS4",
                                    "url": "pag_ps4.html"
                                }
                            ]
                        },
                        {
                            "desc": "Jogos para PC",
                            "url": "pag_jogospc.html"
                        }
                    ]
                }
            ]
        }
    ]

});
