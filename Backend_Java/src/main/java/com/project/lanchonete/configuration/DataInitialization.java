package com.project.lanchonete.configuration;

import com.project.lanchonete.model.Produto;
import com.project.lanchonete.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

import org.springframework.stereotype.Component;

@Component
public class DataInitialization implements CommandLineRunner {

        @Autowired
        private ProdutoRepository produtoRepository;

        @Override
        public void run(String... args) throws Exception {
                Produto produto1 = new Produto();
                produto1.setNome("Hamburguer");
                produto1.setImage(
                                "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?w=2000");
                produto1.setPrice(10);
                produto1.setQuantidade(0);

                Produto produto2 = new Produto();
                produto2.setNome("Batata Frita");
                produto2.setImage(
                                "https://www.sabornamesa.com.br/media/k2/items/cache/377829b055e89e3afb894e7528a10996_XL.jpg");
                produto2.setPrice(5);
                produto2.setQuantidade(0);

                produtoRepository.save(produto1);
                produtoRepository.save(produto2);

                System.out.println("Produtos adicionados ao banco de dados:");
                System.out.println("Produto 1 - ID: " + produto1.getId() + ", Nome: " + produto1.getNome()
                                + ", Quantidade: "
                                + produto1.getQuantidade() + ", Imagem: " + produto1.getImage());
                System.out.println("Produto 2 - ID: " + produto2.getId() + ", Nome: " + produto2.getNome()
                                + ", Quantidade: "
                                + produto2.getQuantidade() + ", Imagem: " + produto2.getImage());

        }

}