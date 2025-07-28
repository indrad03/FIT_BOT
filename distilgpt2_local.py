import tensorflow as tf
from transformers import TFAutoModelForCausalLM

# Load the distilGPT2 model
model = TFAutoModelForCausalLM.from_pretrained("distilgpt2")

# Save the model in TensorFlow SavedModel format
model.save_pretrained("distilgpt2_tensorflow")