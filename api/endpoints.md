# API Endpoints

## POST /translate

Translate text between languages.

### Request
```json
{
  "text": "Hello world",
  "source_lang": "en",
  "target_lang": "vi",
  "tone": "casual",
  "variants": 2
}
```

### Response
```json
{
  "success": true,
  "data": {
    "source": {
      "text": "Hello world",
      "lang": "en"
    },
    "target": {
      "lang": "vi",
      "translations": [
        "Chào thế giới",
        "Xin chào"
      ],
      "confidence": 0.95
    }
  }
}
```

## POST /dictionary

Look up word definition.

### Request
```json
{
  "word": "hello",
  "lang": "en"
}
```

## POST /rewrite

Grammar correction and text rewriting.

### Request
```json
{
  "text": "Me go store",
  "operation": "grammar_correction",
  "target_lang": "en"
}
```
