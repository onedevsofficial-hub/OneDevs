import mongoose from 'mongoose';

const MONGODB = process.env.MONGODB;

const conectarBanco = async () => {
  try {
    await mongoose.connect(MONGODB);
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error.message);
    process.exit(1);
  }
};

export default conectarBanco;