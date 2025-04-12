package com.vinicius.enem.domain;

import jakarta.persistence.*;
import java.io.Serializable;

/**
 * A Meta.
 */
@Entity
@Table(name = "meta")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Meta implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @Column(name = "linguagem_ciencias_tecnologia")
    private Integer linguagemCienciasTecnologia;

    @Column(name = "ciencias_humanas")
    private Integer cienciasHumanas;

    @Column(name = "ciencias_natureza")
    private Integer cienciasNatureza;

    @Column(name = "matematica")
    private Integer matematica;

    @ManyToOne(fetch = FetchType.LAZY)
    private Aluno aluno;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Meta id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getLinguagemCienciasTecnologia() {
        return this.linguagemCienciasTecnologia;
    }

    public Meta linguagemCienciasTecnologia(Integer linguagemCienciasTecnologia) {
        this.setLinguagemCienciasTecnologia(linguagemCienciasTecnologia);
        return this;
    }

    public void setLinguagemCienciasTecnologia(Integer linguagemCienciasTecnologia) {
        this.linguagemCienciasTecnologia = linguagemCienciasTecnologia;
    }

    public Integer getCienciasHumanas() {
        return this.cienciasHumanas;
    }

    public Meta cienciasHumanas(Integer cienciasHumanas) {
        this.setCienciasHumanas(cienciasHumanas);
        return this;
    }

    public void setCienciasHumanas(Integer cienciasHumanas) {
        this.cienciasHumanas = cienciasHumanas;
    }

    public Integer getCienciasNatureza() {
        return this.cienciasNatureza;
    }

    public Meta cienciasNatureza(Integer cienciasNatureza) {
        this.setCienciasNatureza(cienciasNatureza);
        return this;
    }

    public void setCienciasNatureza(Integer cienciasNatureza) {
        this.cienciasNatureza = cienciasNatureza;
    }

    public Integer getMatematica() {
        return this.matematica;
    }

    public Meta matematica(Integer matematica) {
        this.setMatematica(matematica);
        return this;
    }

    public void setMatematica(Integer matematica) {
        this.matematica = matematica;
    }

    public Aluno getAluno() {
        return this.aluno;
    }

    public void setAluno(Aluno aluno) {
        this.aluno = aluno;
    }

    public Meta aluno(Aluno aluno) {
        this.setAluno(aluno);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Meta)) {
            return false;
        }
        return getId() != null && getId().equals(((Meta) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Meta{" +
            "id=" + getId() +
            ", linguagemCienciasTecnologia=" + getLinguagemCienciasTecnologia() +
            ", cienciasHumanas=" + getCienciasHumanas() +
            ", cienciasNatureza=" + getCienciasNatureza() +
            ", matematica=" + getMatematica() +
            "}";
    }
}
