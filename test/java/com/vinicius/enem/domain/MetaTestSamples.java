package com.vinicius.enem.domain;

import java.util.Random;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;

public class MetaTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));
    private static final AtomicInteger intCount = new AtomicInteger(random.nextInt() + (2 * Short.MAX_VALUE));

    public static Meta getMetaSample1() {
        return new Meta().id(1L).linguagemCienciasTecnologia(1).cienciasHumanas(1).cienciasNatureza(1).matematica(1);
    }

    public static Meta getMetaSample2() {
        return new Meta().id(2L).linguagemCienciasTecnologia(2).cienciasHumanas(2).cienciasNatureza(2).matematica(2);
    }

    public static Meta getMetaRandomSampleGenerator() {
        return new Meta()
            .id(longCount.incrementAndGet())
            .linguagemCienciasTecnologia(intCount.incrementAndGet())
            .cienciasHumanas(intCount.incrementAndGet())
            .cienciasNatureza(intCount.incrementAndGet())
            .matematica(intCount.incrementAndGet());
    }
}
