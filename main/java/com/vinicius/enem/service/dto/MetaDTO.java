package com.vinicius.enem.service.dto;

import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link com.vinicius.enem.domain.Meta} entity.
 */
@SuppressWarnings("common-java:DuplicatedBlocks")
public class MetaDTO implements Serializable {

    private Long id;

    private Integer linguagemCienciasTecnologia;

    private Integer cienciasHumanas;

    private Integer cienciasNatureza;

    private Integer matematica;

    private AlunoDTO aluno;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getLinguagemCienciasTecnologia() {
        return linguagemCienciasTecnologia;
    }

    public void setLinguagemCienciasTecnologia(Integer linguagemCienciasTecnologia) {
        this.linguagemCienciasTecnologia = linguagemCienciasTecnologia;
    }

    public Integer getCienciasHumanas() {
        return cienciasHumanas;
    }

    public void setCienciasHumanas(Integer cienciasHumanas) {
        this.cienciasHumanas = cienciasHumanas;
    }

    public Integer getCienciasNatureza() {
        return cienciasNatureza;
    }

    public void setCienciasNatureza(Integer cienciasNatureza) {
        this.cienciasNatureza = cienciasNatureza;
    }

    public Integer getMatematica() {
        return matematica;
    }

    public void setMatematica(Integer matematica) {
        this.matematica = matematica;
    }

    public AlunoDTO getAluno() {
        return aluno;
    }

    public void setAluno(AlunoDTO aluno) {
        this.aluno = aluno;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof MetaDTO)) {
            return false;
        }

        MetaDTO metaDTO = (MetaDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, metaDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "MetaDTO{" +
            "id=" + getId() +
            ", linguagemCienciasTecnologia=" + getLinguagemCienciasTecnologia() +
            ", cienciasHumanas=" + getCienciasHumanas() +
            ", cienciasNatureza=" + getCienciasNatureza() +
            ", matematica=" + getMatematica() +
            ", aluno=" + getAluno() +
            "}";
    }
}
