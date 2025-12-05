-- Lag tabellen brukere
CREATE TABLE brukere(
    id SERIAL PRIMARY KEY,
    fornavn VARCHAR(50),
    etternavn VARCHAR(50),
    epost VARCHAR(50),
    brukernavn TEXT,
    passord VARCHAR(20),
    fodselsdato DATE,
    avdeling TEXT,
    eradmin BOOLEAN
);

-- CHATGPT prompt: 
-- Lag 100 brukere fordelt på 6 ulike avdelinger. La selskapet være et IT-selskap. La 12 av brukerne være admin brukere. Gi meg den komplette sql-koden som setter inn dataene basert på denne tabellen: (Lim inn create table her)
CREATE TABLE brukere(
    id SERIAL PRIMARY KEY,
    fornavn VARCHAR(50),
    etternavn VARCHAR(50),
    epost VARCHAR(50),
    brukernavn TEXT,
    passord VARCHAR(20),
    fodselsdato DATE,
    avdeling TEXT,
    eradmin BOOLEAN
);