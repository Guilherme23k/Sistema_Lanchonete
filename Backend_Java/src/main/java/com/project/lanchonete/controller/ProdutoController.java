package com.project.lanchonete.controller;

import com.project.lanchonete.model.Produto;
import com.project.lanchonete.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {

    @Autowired
    private ProdutoRepository produtoRepository;

    @GetMapping
    public List<Produto> getAllProdutos(){
        return produtoRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Produto> createProdutos(@RequestBody Produto produto){

        try{
            Produto newProduto = produtoRepository.save(produto);
            return ResponseEntity.status(HttpStatus.CREATED).body(newProduto);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

}
